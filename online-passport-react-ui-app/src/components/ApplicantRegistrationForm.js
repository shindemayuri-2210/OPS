import React,{Component} from 'react'
import { Button } from 'react-bootstrap';
import './ApplicationForm.css'
import ApplicantService from '../services/ApplicantService'
import {Link} from 'react-router-dom';
import Img16 from '../Images/img16.jpeg';


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
);
const passwordRegex = RegExp(
  /^([a-zA-Z0-9@#*]{8,})$/
);


const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};



class ApplicantRegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
      firstName: null,
      lastName: null,
      emailId: null,
      password: null,
      formErrors: {
      
           firstName: "",
           lastName: "",
           emailId: "",
           password: "", 
      }
    };

    this.saveApplicant=this.saveApplicant.bind(this);
  }
    componentDidMount(){

      // step 4
      if(this.state.applicantId === '_add'){
          return
      }
  }
  saveApplicant = (e) => {
    e.preventDefault();
    let applicant = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, password: this.state.password};
    console.log('applicant => ' + JSON.stringify(applicant));

    // step 5
    
        ApplicantService.createNewApplicant(applicant).then(res =>{
           alert("REGISTRATION SUCCESSFULL!! PLEASE LOGIN");
            this.props.history.push('/LoginForm');
        });
        
    }
    
  

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}

        Last Name: ${this.state.lastName}
        Email: ${this.state.emailId}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
        

      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "*Minimum 3 characters required" : "";
        break;

      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "*Minimum 3 characters required" : "";
        break;

        
      case "emailId":
        formErrors.emailId = emailRegex.test(value)
          ? ""
          : "*Invalid email address";
        break;
      case "password":
        formErrors.password =passwordRegex.test(value)
        ? ""
        : "*Invalid password! Please check password policy";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  back(){
    this.props.history.push("/LoginForm");
  }


  

  render() {
    const { formErrors } = this.state;

    return (
      
      <div className="wrapper">
      <div className="form-wrapper">
      
      <div>
          <div>
                            <img
                                className="d-block w-100"
                                src={Img16}
                                alt="First slide"
                                width="2"
                                height="500"
                            />
                            </div>
                           
          </div>


          <form onSubmit={this.handleSubmit} noValidate>
             <h2>Registration form</h2>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                type="text"
                name="firstName"
                value={this.state.firstName}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>

            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                type="text"
                name="lastName"
                noValidate
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.emailId.length > 0 ? "error" : null}
                type="email"
                name="emailId"
                noValidate
                value={this.state.emailId}
                onChange={this.handleChange}
              />
              {formErrors.emailId.length > 0 && (
                <span className="errorMessage">{formErrors.emailId}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                type="password"
                name="password"
                noValidate
                value={this.state.password}
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <Button variant="primary" name="register" value="REGISTER" onClick={this.saveApplicant}>REGISTER</Button>
            {'\u00A0'}{'\u00A0'}Already registered?{'\u00A0'}{'\u00A0'} <Button variant="primary" name="login" value="LOGIN" onClick={() => this.back()}>LOGIN</Button>
         <div>   
           <div><br/>{'\u00A0'}{'\u00A0'} {'\u00A0'}{'\u00A0'}<Link to="/PasswordPolicy"><u>check password policy</u></Link></div></div>
          </form>
          </div>
          </div>
        
    )
  }
}


export default ApplicantRegistrationForm;