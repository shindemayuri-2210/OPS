import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListVerificationComponent from './components/ListVerificationComponent.js';

import CreateVerificationComponent from './components/CreateVerificationComponent';
import UpdateVerification from './components/UpdateVerificationComponent';
import ViewVerificationComponent from './components/ViewVerificationComponent';

function AppM() {
  return (
    <div>
        <Router>
            
                <div className="container">
                    <Switch> 
                        <Route path = "/" exact component = {ListVerificationComponent}></Route>
                        <Route path = "/applicants" component = {ListVerificationComponent}></Route>
                          <Route path = "/add-applicant/:id" component = {CreateVerificationComponent}></Route>
                          <Route path = "/view-applicant/:id" component = {ViewVerificationComponent}></Route>
                          { <Route path = "/update-applicant/:id" component = {UpdateVerification}></Route> }
                    </Switch>
                </div>
             
        </Router>
    </div>
    
  );
}

export default AppM;
