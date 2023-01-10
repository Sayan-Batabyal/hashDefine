import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import upCertificate from './components/UpCertificate';
import validCertificate from './components/ValidCertificate';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/Signup';

const Router = ({location}) => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/uploadCertificate" component={upCertificate} />
            <Route exact path="/validCertificate" component={validCertificate} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
        </BrowserRouter>
    )
}

export default Router;