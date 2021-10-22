import React, {Component} from 'react'
import {Redirect, Route} from "react-router-dom";
import auth from './Authentication'

const PrivateRoute = ({component: Component, ...rest}) => {
    const isLogged = auth.isAuthenticate();
    return (
        <Route
            {...rest}
            render={props => {
                return isLogged ? <Component {...props}/> : <Redirect to="/signin"/>
            }}
        >

        </Route>
    )
}
export default PrivateRoute