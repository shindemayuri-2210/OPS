import './App.css';
import Document from './components/Document';

import ApplicantRegistrationForm from "./components/ApplicantRegistrationForm";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm"
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PassportApplicationForm from "./components/PassportApplicationForm"
import PhotoSign from './components/Photo&Sign';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        
          <Navbar />

          <div className="container">
          <Switch>
            <Route path="/ApplicantRegistrationForm" exact component={ApplicantRegistrationForm}></Route>
            <Route path="/LoginForm" exact component={LoginForm} ></Route>

          
              <Route path="/Document" exact component={Document}></Route>
              <Route path="/PhotoSign" exact component={PhotoSign}></Route>

              <Route path="/PassportApplicationForm" exact component={PassportApplicationForm} ></Route>
           
            </Switch>
          </div>
        
      </BrowserRouter>
    </div>





  );
}

export default App;
