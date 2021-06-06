import React, {useState, useEffect,  createContext} from "react";
import {auth} from '../service/firebase';
export const UserContext = createContext(({user:null}));

export default (props) =>{
    const [user,setUser] = useState(null);

    useEffect(()=>{
        auth.onAuthStateChanged((async (user)=>{
            // const {displayName,email,photoURL} = user;
            // setUser({
            //     displayName,
            //     email,
            //     photoURL
            // })
            const user1 = user;
            const name = user1 && user1.displayName ? user1.displayName :'';
            const email = user1 && user1.email ? user1['email'] : '';
            const imgUrl = user1 && user1.photoURL ? user1['photoURL'] : '';
            setUser( email !=='' ? {
                name :name,
                email:email,
                imgUrl:imgUrl
            }:null)

            console.log('user in auth state change--->',user)
        }))
    },[])
    return(
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    )
}