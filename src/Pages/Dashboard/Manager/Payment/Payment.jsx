import { Helmet } from "react-helmet";
import Title from "../../../../Components/Title";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = ({price}) => {
    return (
        <div className="w-5/6 mx-auto">
            <Helmet>
                <title>Asset Track Pro | Select Package</title>
            </Helmet>
            <Title heading={'PAYMENT'} subHeading={'Buy this package and enjoy our service!'} ></Title>
            <h2 className="mt-6 text-semibold text-center text-purple-500 my-6">Payable Amount: $ <span className="text-bold">{price}.00</span>  </h2>
            <div className="w-full md:w-1/2  mx-auto bg-purple-100 p-10 rounded-2xl">
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={price}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;