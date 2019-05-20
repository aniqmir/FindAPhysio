import React from 'react';
import {
    Router,
    // Route
    }   from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { PublicRoute } from 'react-router-with-props';


import Login from './login/login.jsx';
import Home from './home/home.jsx';
import Success from './success/success.jsx'

const customHistory = createBrowserHistory();

class CustomRoutes extends React.Component{
    render() {
        return(
            <Router history={customHistory}>
               <div>
               <PublicRoute exact path="/" component={Login}/>
               <PublicRoute exact path="/home" component={Home}/>
               <PublicRoute exact path="/success" component={Success}/>
               </div>
            </Router>
        )
    }
}

export default CustomRoutes;