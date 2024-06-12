import {CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";


const CheckoutForm = ({price}) => {
    const [error,setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId,setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const payableAmount = price;

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price:payableAmount})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    },[axiosSecure,payableAmount])
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card == null){
            return
        }
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log('payment error', error);
            setError(error.message)
        }else{
            console.log('payment method',paymentMethod)
            setError('')
        }
        //confirm payment
        const {paymentIntent,error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: card,
                billing_details:{
                    email: user?.email || 'anonymous',
                    name:  user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log( 'payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id' , paymentIntent.id)
                setTransactionId(paymentIntent.id);
                //now save the payment in the database
                const payment = {
                    email: user.email,
                    price: payableAmount,
                    date: new Date(),
                    status: 'Pending'
                }
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className="btn btn-base btn-sm mt-6 w-full" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-700 font-semibold my-3">{error}</p>
            {transactionId && 
                <div className="my-4 text-purple-500">
                    <h2 className="font-semibold my-1">Transaction Successful!</h2>
                    <p className="text-purple-700 font-medium">Your Transaction id: {transactionId} </p>
                </div>
             }
    </form>
    );
};

export default CheckoutForm;