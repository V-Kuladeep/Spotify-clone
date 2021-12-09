import React, { createContext, useState } from "react";
import { useEffect } from "react";
import firebase from "firebase";
export let Authcontextapi = createContext();
let Authprovider = ({ children }) => {
    let [state, setState] = useState(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user.emailVerified === true) {
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