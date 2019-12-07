import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Map from '../pages/Map';
import Reset from '../pages/Reset';
import Signup from '../pages/Signup';

const UnAuthenticated = () => {
    return (
        <Router>
            <Switch>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/signup'>
                    <Signup />
                </Route>
                <Route path='/reset'>
                    <Reset />
                </Route>
                <Route path='/map'>
                    <Map />
                </Route>
            </Switch>
        </Router>
    );
}

export default UnAuthenticated;