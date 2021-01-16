import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Consumer} from './Context';

const LoginPrivateRoute = ({component: Component, ...rest}) => {
    let jeILoguar;
    if (localStorage.getItem("loggedIn") !== null) {
        jeILoguar = false;
    } else {
        jeILoguar = true;
    }
    return (
        <Route {...rest} render={props => (
            jeILoguar ?
                <Component {...props} />
                : <Redirect to="/dashboard"/>
        )}/>
    );
};

export default LoginPrivateRoute;