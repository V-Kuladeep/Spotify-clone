import React from 'react'
import { useContext, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Authcontextapi } from '../Apis/Authcontext';
import { Route} from 'react-router-dom';
import Spinner from '../Pages/Spinner/Spinner';

const ProtectedRoute = ({ component:Component,...parameters }) => {
    let USER= useContext(Authcontextapi)
    return (
        <Route {...parameters}
            render={props => { 
                return (
                    <Fragment>
                        {USER === null ? (
                            <Spinner/>
                        ) : (<Fragment>
                                {USER ? <Component {...props}/>:<Redirect to="/login"/>}
                        </Fragment>
                        )}
                    </Fragment>
                )
            }}
        />
    )
}

export default ProtectedRoute
