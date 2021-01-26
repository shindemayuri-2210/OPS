import React from 'react';
import { Button } from 'react-bootstrap';
import './LoginForm.css'
import ApplicantService from '../services/ApplicantService'
import Img13 from '../Images/img13.png'



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



class AdminLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
      
      adminId: null,
      password: null,
      applicant:{},
      formErrors: {
      
           
           adminId: "",
           password: "",
        
      }
    };
    this.validateLogin =this.validateLogin.bind(this);
  }

  validateLogin=(e)=>
  {
    e.preventDefault();
    let adminLogin={
      adminId:this.state.adminId,
      password:this.state.password
    };
    console.log('adminLogin=>' + JSON.stringify(adminLogin));
 
 
    ApplicantService.adminLogin(adminLogin).then((res)=>{
      
       if(res.status===200 && res.data.includes("SUCCESSFULL"))
       {
          this.setState({ applicant: res.data });
          localStorage.setItem("token",this.state.applicant.applicandId);
          console.log("applicant=>"+JSON.stringify(this.state.applicant));
          alert(this.state.applicant);
          this.props.history.push('/ListApplicantComponent');


       } 
       else{
         this.setState({applicant: res.data});
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
        Email: ${this.state.adminId}
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
    

        
      case "adminId":
        formErrors.adminId = emailRegex.test(value)
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
                                src={Img13}
                                alt="First slide"
                                width="7"
                                height="300"
                            />
                            </div>
                           
          </div>
      
          <form onSubmit={this.handleSubmit} noValidate>
          
          <h2>Admin Login</h2>
          
            <br/>
            <br/>
            
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.adminId.length > 0 ? "error" : null}
                type="email"
                name="adminId"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.adminId.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                type="password"
                name="password"
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

export default AdminLogin;