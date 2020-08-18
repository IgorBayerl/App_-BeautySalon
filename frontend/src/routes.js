import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncidents from './pages/NewIncident';
import QRGen from './pages/QRGen';

export default function Routges() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncidents} />
                <Route path="/QRGen" component={QRGen} />
            </Switch>
        </BrowserRouter>
    );
}