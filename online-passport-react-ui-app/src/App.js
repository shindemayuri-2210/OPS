import AppM from './AppM';


function App() {
  return (
    <div className="App">
<AppM/>
    </div>





  );
}

export default App;
/*
import Document from './components/Document';
import ApplicantRegistrationForm from "./components/ApplicantRegistrationForm";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm"
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PassportApplicationForm from "./components/PassportApplicationForm"
import PhotoSign from './components/Photo&Sign';
import HomePage from './components/HomePage';
<<<<<<< HEAD
import AdminLogin from './components/AdminLogin';
import PasswordPolicy from './components/PasswordPolicy';
import AboutUs from './components/AboutUs';
import ViewApplicantsComponent from './components/ViewApplicantsComponent';
import ListApplicantComponent from './components/ListApplicantComponent';

function App() {
  return (
    <div className="App">

=======
>>>>>>> a7ace5a338f4eb1860b9081794fbf4090888b6f3
      <BrowserRouter>
        
          <Navbar />
          <div className="container">
          <Switch>
          <Route path="/ListApplicantComponent" exact component={ListApplicantComponent}></Route>
          <Route path="/ViewApplicantsComponent" exact component={ViewApplicantsComponent}></Route>
          <Route path="/PasswordPolicy" exact component={PasswordPolicy}></Route>
          <Route path="/HomePage" exact component={HomePage}></Route>
            <Route path="/ApplicantRegistrationForm" exact component={ApplicantRegistrationForm}></Route>
            <Route path="/LoginForm" exact component={LoginForm} ></Route>
            <Route path="/AdminLogin" exact component={AdminLogin} ></Route>
            <Route path="/AboutUs" exact component={AboutUs} ></Route>

          
              <Route path="/Document" exact component={Document}></Route>
              <Route path="/PhotoSign" exact component={PhotoSign}></Route>

              <Route path="/PassportApplicationForm" exact component={PassportApplicationForm} ></Route>
           
            </Switch>
          </div>
        
      </BrowserRouter>
*/