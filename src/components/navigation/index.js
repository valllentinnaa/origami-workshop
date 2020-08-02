import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from '../../pages/home'
import Share from '../../pages/share'
import Register from "../../pages/register";
import Login from "../../pages/login";

const Navigation = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/share" component={Share} />
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route />
            </Switch>
        </Router>
    )
};

export default Navigation;