import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {app} from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic =  useAxiosPublic();

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
            // packageType: pack,
        })
        // .then(()=>{

        // }).catch((error)=>{
        //     console.log(error)
        // });
    }

    useLayoutEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            // console.log('current user', currentUser)
            if(currentUser){
                //get token and store client
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                    .then(res=>{
                        if(res.data.token){
                            // console.log(res.data.token);
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else{
            // remove token(if token stored in the client side: Local storage/caching/ in memory)
            localStorage.removeItem('access-token');
            setLoading(false);
            }
            // setLoading(false);
        });
        return()=>{
            return unsubscribe;
        }
    },[axiosPublic])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile,
        
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;