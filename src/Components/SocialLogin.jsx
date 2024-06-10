import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleSignInWithGoogle =() =>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                photo: result.user?.photoURL
            }
            axiosPublic.post('/users',userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/')
            })
        })
    }
    return (
        <div className='text-center'>
            <div className="divider"></div>
            <button onClick={handleSignInWithGoogle} className="btn bg-purple-200 uppercase text-purple-700" >
                <FaGoogle></FaGoogle>
                log In With Google
            </button>
        </div>
    );
};

export default SocialLogin;