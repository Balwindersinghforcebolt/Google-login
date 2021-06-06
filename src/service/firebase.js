import dotenv from 'dotenv'

import firebase from 'firebase/app'
import "firebase/auth";
import {useHistory} from "react-router-dom";
dotenv.config()
const googleProvider = new firebase.auth.GoogleAuthProvider()
firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
});
export const auth = firebase.auth();



// For login
export const signInWithGoogle =() =>{
    auth.signInWithPopup(googleProvider).then((res)=>{
        console.log('User---->',res.user);
    }).catch((error)=>{
        console.log("error----->",error);
    })
}


// For Logout

export const logOut =()=>{

    // eslint-disable-next-line react-hooks/rules-of-hooks

    auth.signOut().then(()=>{
        console.log('Logged out');
    }).catch((error)=>{
        console.log('Error in signOut---->',error.message);
    })
}