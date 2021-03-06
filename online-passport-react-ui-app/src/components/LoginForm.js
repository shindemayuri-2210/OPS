import React from 'react';
import { Button } from 'react-bootstrap';
import './LoginForm.css'
import ApplicantService from '../services/ApplicantService'
import Img4 from '../Images/img4.jpg'



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



class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
      emailId: null,
      password: null,
      applicant:{},
      formErrors: {
           emailId: "",
           password: "",
        
      }
    };
    this.validateLogin =this.validateLogin.bind(this);
  }

  validateLogin=(e)=>
 {
   e.preventDefault();
   let login={
     emailId:this.state.emailId,
     password:this.state.password
   };
   console.log('login=>' + JSON.stringify(login));


   ApplicantService.login(login).then((res)=>{
     

  if(res.status===200 && res.data.includes("SUCCESSFULL"))
  {
      this.setState({ applicant: res.data });
      localStorage.setItem("token",this.state.applicant.applicandId);
      console.log("applicant=>"+JSON.stringify(this.state.applicant));
      alert(this.state.applicant);
      //alert("LOGIN SUCCESSFULL!");
      this.props.history.push('/PassportApplicationForm');
  }
  else{
    this.setState({applicant:res.data});
    console.log("applicant=>"+JSON.stringify(this.state.applicant));
    alert(this.state.applicant);
  }
   })
  
 }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
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
        
      case "emailId":
        formErrors.emailId = emailRegex.test(value)
          ? ""
          : "*Invalid email address";
        break;
      case "password":
        formErrors.password =passwordRegex.test(value)
        ? ""
        : "*Invalid password! Minimum 8 characters required";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  back(){
    this.props.history.push("/HomePage");
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
                                src={Img4}
                                alt="First slide"
                                width="10"
                                height="300"
                            />
                            </div>
                           
          </div>
          <form onSubmit={this.handleSubmit} noValidate>
          
          <h2>Login form</h2>
          
            <br/>
            <br/>
            
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.emailId.length > 0 ? "error" : null}
                type="email"
                name="emailId"
                value={this.state.emailId}
                noValidate
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
                value={this.state.password}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>

           
              
             <Button variant="primary" name="login" value="LOGIN" onClick={this.validateLogin}>LOGIN</Button>
             <button className="btn btn-danger ml-3"  onClick={() => this.back()}>CANCEL</button>
          
          </form>
          </div>
          </div>
        
    );
  }
}

export default LoginForm;