import React from 'react'
import { useContext } from 'react';
import { Authcontextapi } from './../Apis/Authcontext';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ children, ...rest }) => {
    let USER = useContext(Authcontextapi);
    return (
        <Route
            {...rest}
            render={props => {
                return USER ? <Redirect to="/UserHome/profile"{...props} /> : children;
        }}/>
    )
}

export default PublicRoute
