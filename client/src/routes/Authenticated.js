import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditTrail from '../pages/EditTrail';
import EditUser from '../pages/EditUser';
import Map from '../pages/Map';
import ViewTrails from '../pages/ViewTrails';

const Authenticated = () => {
    return (
        <Router>
            <Switch>
                {/* <Route path='/map'>
                    <Map />
                </Route>
                <Route path='/trails'>
                    <ViewTrails />
                </Route>
                <Route path='/edit/trail'>
                    <EditTrail />
                </Route>
                <Route path='/edit/user'>
                    <EditUser />
                </Route> */}
            </Switch>
        </Router>
    );
}

export default Authenticated;