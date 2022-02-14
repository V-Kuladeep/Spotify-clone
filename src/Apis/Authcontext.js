import React, { createContext, useState } from "react";
import { useEffect } from "react";
import firebase from "firebase";
import Spinner from './../Pages/Spinner/Spinner';
export let Authcontextapi = createContext();
let Authprovider = ({ children }) => {
    let [state, setState] = useState(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user.isAnonymous===false && user.emailVerified === true) {
                setState(user);
            } else {
                setState(null)
            }
        
        }
        )
    });
    return (
        <Authcontextapi.Provider value={state}>
            {children}
        </Authcontextapi.Provider>
    )
}

export default Authprovider;