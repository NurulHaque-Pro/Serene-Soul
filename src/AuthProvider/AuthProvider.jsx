import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

const auth = getAuth(app)

export const AuthContext = createContext(null);

const googleAuthProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUpWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider)
    }

    // Email LogIn 

    const signInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Update Profile

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName : name, photoURL : photoURL
        })
    }

    const logOut = () => {
        signOut(auth)
            .then(result => {

            })
            .catch(error => {

            })
    }

    // Observe the user by firebase

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email : currentUser.email})
                .then(data => {
                    // console.log(data.data);
                    localStorage.setItem('access-token', data.data)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        signUpWithEmail,
        signInWithGoogle,
        signInWithEmail,
        updateUserProfile,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;