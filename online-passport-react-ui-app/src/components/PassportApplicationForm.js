

import './PassportApplicationForm.css';
import React from 'react';




const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const mobileRegex = RegExp(
  /^[0-9]{10}$/
);

const nameRegex = RegExp(
  /^[a-zA-Z]*$/
);

const aadharRegex = RegExp(
  /^[0-9]{12}$/
);

const zipRegex = RegExp(
  /^[0-9]{6}$/
);

const dateRegex = RegExp(
  /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/
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



class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipCode:null,
      fatherFirstName:null,
      fatherMiddleName:null,
      fatherLastName:null,
      motherFirstName:null,
      motherMiddleName:null,
      motherLastName:null,
     aadharNo:null,
      firstName: null,
      middleName:null,
      lastName: null,
      email: null,
      password: null,
      mobileNo:null,
      dateBirth:null,
      formErrors: {
        zipCode:"",
        aadharNo:"",
        firstName: "",
        middleName:"",
        lastName: "",
        email: "",
        password: "",
        birthVillage:"",
        fatherFirstName:"",
      fatherMiddleName:"",
      fatherLastName:"",
      motherFirstName:"",
      motherMiddleName:"",
      motherLastName:"",
      mobileNo:"",
      dateBirth:""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}

        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
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

      

        case "fatherFirstName":
          formErrors.fatherFirstName = nameRegex.test(value)
          ? ""
          : "name cannot contain digits";
          break;

        case "fatherMiddleName":
          formErrors.fatherMiddletName = nameRegex.test(value)
          ? ""
          : "name cannot contain digits";
          break;

        case "fatherLastName":
          formErrors.fatherLasttName = nameRegex.test(value)
          ? ""
          : "name cannot contain digits";
          break;

        case "motherFirstName":
          formErrors.motherFirstName = nameRegex.test(value)
          ? ""
          : "name cannot contain digits";
          break;

        case "motherMiddleName":
          formErrors.motherMiddleName = nameRegex.test(value)
          ? ""
          : "name cannot contain digits";
          break;

        case "motherLastName":
          formErrors.motherLastName = nameRegex.test(value)
          ? ""
          : "name cannot contain digits";
          break;



        case "aadharNo":
          formErrors.aadharNo = aadharRegex.test(value)
          ? ""
          : "Aaadhar numbers contains only 12 digits";
          break;
        

      case "firstName":
        formErrors.firstName = nameRegex.test(value)
          ? ""
          : "name cannot contain digits";
          break;

          case "zipCode":
        formErrors.zipCode = zipRegex.test(value)
          ? ""
          : "Zipcode  contains only 6 digits";
          break;

          

        case "middleName":
          formErrors.middleName = nameRegex.test(value)
          ? ""
          : "name cannot contain digits";
          break;

      case "lastName":
        formErrors.lastName = nameRegex.test(value)
          ? ""
          : "name cannot contain digits";
          break;

        case "birthVillage":
        formErrors.birthVillage =
          value.length < 2 ? "minimum 2 characaters required" : "";
        break;
        
        case "dateBirth":
          formErrors.dateBirth = dateRegex.test(value)
            ? ""
            : "invalid date";
          break;
        
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
        
        case "mobileNo":
        formErrors.mobileNo = mobileRegex.test(value)
          ? ""
          : "invalid mobile number";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  

  render() {
    const { formErrors } = this.state;

    return (
      
      <div className="wrapper">
      <div className="form-wrapper">
      
          <form onSubmit={this.handleSubmit} noValidate>
          
          <h1>NEW PASSPORT APPLICATION</h1>
          <div>
          <h2>Service Details</h2>
          <div className="typeAppl">  
            <label>Type of Application
            <select value={this.state.application} onChange={this.handleSubmit}> 
            <option name=''>Select Gender</option>
                  <option name="normal"> Normal</option>
                  <option name="tatkaal">Tatkaal</option>
              </select>
              </label>

          </div>    
          <div className="bookletType">  
            <label>Type of Passport Booklet
            <select value={this.state.application} onChange={this.handleSubmit}> 
            <option name=''>Select Booklet Type</option>
                  <option name="36pages">36 Pages</option>
                  <option name="60pages">60 Pages</option>
              </select>
              </label>

          </div>
          
          </div>
          
          <h2>Applicant Details</h2>
            <div className="firstName">
              <label htmlFor="firstName">Applicant's First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Applicant First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>

            <div className="middleName">
              <label htmlFor="middleName">Middle Name</label>
              <input
                className={formErrors.middleName.length > 0 ? "error" : null}
                placeholder="Middle Name"
                type="text"
                name="middleName"
                noValidate
                onChange={this.handleChange}
              />
                {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.middleName}</span>
              )}
              </div>
            
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange} 
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>

            <div className="gender">  
            <label>Gender
            <select value={this.state.gender} onChange={this.handleSubmit}> 
            <option name=''>Select Gender</option>
                  <option name="male"> Male</option>
                  <option name="Female">Female</option>
              </select>
              </label>

          </div>    

          <div className="maritialstatus">  
            <label>Maritial Status
            <select value={this.state.maritialstatus} onChange={this.handleSubmit}> 
            <option name=''>Maritial Status</option>
                  <option name="single">Single</option>
                  <option name="married">Married</option>
                  <option name="divorced">Divorced</option>
                  <option name="widow">Widow/Widower</option>
                  <option name="seperator">Seperator</option>

              </select>
              </label>

          </div>    

          

          <div className="education">  
            <label>Educational Qualification
            <select value={this.state.education} onChange={this.handleSubmit}> 
            <option name=''>Select Educational Qualification</option>
                  <option name="single">7 th pass or less</option>
                  <option name="married">Between 8th and 9th standard</option>
                  <option name="divorced">10th pass or above</option>
                  <option name="widow">Graduate and above</option>
                  

              </select>
              </label>

          </div>    
          
          <div className="placeOut">  
            <label>Is your Place of Birth out of India
            <select value={this.state.place} onChange={this.handleSubmit}> 
           
                  <option name="yes">Yes</option>
                  <option name="no">No</option>
                  
                  

              </select>
              </label>

          </div>    

          <div className="dateBirth">
              <label htmlFor="dateBirth">Date of birth</label>
              <input
                className={formErrors.dateBirth.length > 0 ? "error" : null}
                placeholder="Date of Birth(dd-mm-yyyy )"
                type="text"
                name="dateBirth"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.dateBirth.length > 0 && (
                <span className="errorMessage">{formErrors.dateBirth}</span>
              )}
            </div>
            


          <div className="employmentType">  
            <label>Employment Type
            <select value={this.state.employment} onChange={this.handleSubmit}> 
            <option name=''>Select Employment Type</option>
                  <option name="government">Government</option>
                  <option name="private">Private</option>
                  <option name="divorced">Not employed</option>
                  <option name="widow">Student</option>
                  <option name="seperator">Retired Government Servant</option>
                  <option name="divorced">Private Governement Servant</option>
                  <option name="widow">Homemaker</option>
                  <option name="seperator">Others</option>
                  <option name="divorced">PSU</option>
                  <option name="widow">Self Employed</option>
                  <option name="seperator">Statutory Body</option>

              </select>
              </label>

          </div>    


          <div className="citizen">  
            <label>Citizenship of India by
            <select value={this.state.citizenship} onChange={this.handleSubmit}> 
           
                  <option name="birth">Birth</option>
                  <option name="descent">Descent</option>
                  <option name="registration">Registration</option>
                  
                  

              </select>
              </label>

          </div>   
          <div className="ecr">  
            <label>Are you eligible for Non-ECR category
            <select value={this.state.ecr} onChange={this.handleSubmit}> 
            <option name=''>Select</option>
                  <option name="yes">Yes</option>
                  <option name="no">No</option>
                  
              </select>
              </label>

          </div>    
          <div className="state">  
            <label>State
            <select value={this.state.states} onChange={this.handleSubmit}> 
            <option name=''>Select State</option>
                  <option name="government">Andhra Pradesh</option>
                  <option name="private">Arunachal Pradesh</option>
                  <option name="divorced">Assam</option>
                  <option name="widow">Bihar</option>
                  <option name="seperator">Chhattisgarh</option>
                  <option name="divorced">Goa</option>
                  <option name="widow">Gujarat</option>
                  <option name="seperator">Haryana</option>
                  <option name="divorced">Himachal Pradesh</option>
                  <option name="widow">Jharkhand</option>
                  <option name="seperator">Karnataka	</option>
                  <option name="government">Kerala</option>
                  <option name="private">Madhya Pradesh</option>
                  <option name="divorced">Maharashtra</option>
                  <option name="widow">Manipur</option>
                  <option name="seperator">Meghalaya</option>
                  <option name="divorced">Mizoram</option>
                  <option name="widow">Nagaland</option>
                  <option name="seperator">Odisha</option>
                  <option name="divorced">Punjab</option>
                  <option name="widow">Rajasthan</option>
                  <option name="seperator">Sikkim</option>
                  <option name="divorced">Tamil Nadu</option>
                  <option name="widow">Telangana</option>

                  <option name="seperator">Tripura</option>
                  <option name="divorced">Uttar Pradesh</option>
                  <option name="widow">Uttarakhand</option>
                  <option name="seperator">West Bengal</option>
                  


              </select>
              </label>

          </div> 

          <div className="birthVillage">
              <label htmlFor="birthVillage">Birth Village or Town or City</label>
              <input
                className={formErrors.birthVillage.length > 0 ? "error" : null}
                placeholder="Birth Village or Town or City"
                type="text"
                name="birthVillage"
                noValidate
                onChange={this.handleChange}
              />   
               {formErrors.birthVillage.length > 0 && (
                <span className="errorMessage">{formErrors.birthVillage}</span>
              )}
            </div>

            <div className="aadharNo">
              <label htmlFor="aadharNo">Aadhar Number</label>
              <input
                className={formErrors.aadharNo.length > 0 ? "error" : null}
                placeholder="Aadhar Number"
                type="text"
                name="aadharNo"
                noValidate
                onChange={this.handleChange}
              />
                {formErrors.aadharNo.length > 0 && (
                <span className="errorMessage">{formErrors.aadharNo}</span>
              )}
              </div>
              <h2>Family Details</h2>
              <div className="fatherFirstName">
              <label htmlFor="fatherFirstName">Father's First Name</label>
              <input
                className={formErrors.fatherFirstName.length > 0 ? "error" : null}
                placeholder="Father's First Name"
                type="text"
                name="fatherFirstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.fatherFirstName.length > 0 && (
                <span className="errorMessage">{formErrors.fatherFirstName}</span>
              )}
            </div>

            <div className="fatherMiddleName">
              <label htmlFor="fatherMiddleName">Middle Name</label>
              <input
                className={formErrors.fatherMiddleName.length > 0 ? "error" : null}
                placeholder="Father's Middle Name"
                type="text"
                name="fatherMiddleName"
                noValidate
                onChange={this.handleChange}
              />
                {formErrors.fatherMiddleName.length > 0 && (
                <span className="errorMessage">{formErrors.fatherMiddleName}</span>
              )}
              </div>
            
            <div className="fatherLastName">
              <label htmlFor="fatherLastName">Father's Last Name</label>
              <input
                className={formErrors.fatherLastName.length > 0 ? "error" : null}
                placeholder="Father's Last Name"
                type="text"
                name="fatherLastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.fatherLastName.length > 0 && (
                <span className="errorMessage">{formErrors.fatherLastName}</span>
              )}
            </div>

            <div className="motherFirstName">
              <label htmlFor="motherFirstName">Mother's First Name</label>
              <input
                className={formErrors.motherFirstName.length > 0 ? "error" : null}
                placeholder="Mother's First Name"
                type="text"
                name="motherFirstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.motherFirstName.length > 0 && (
                <span className="errorMessage">{formErrors.motherFirstName}</span>
              )}
            </div>

            <div className="motherMiddleName">
              <label htmlFor="motherMiddleName"> Mother's Middle Name</label>
              <input
                className={formErrors.motherMiddleName.length > 0 ? "error" : null}
                placeholder="Mother's Middle Name"
                type="text"
                name="motherMiddleName"
                noValidate
                onChange={this.handleChange}
              />
                {formErrors.motherMiddleName.length > 0 && (
                <span className="errorMessage">{formErrors.motherMiddleName}</span>
              )}
              </div>
            
            <div className="motherLastName">
              <label htmlFor="motherLastName">Mother's Last Name</label>
              <input
                className={formErrors.motherLastName.length > 0 ? "error" : null}
                placeholder="Mothers's Last Name"
                type="text"
                name="motherLastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.motherLastName.length > 0 && (
                <span className="errorMessage">{formErrors.motherLastName}</span>
              )}
            </div>

            <h2> Present Residential Address Details (Where Applicant Presently Resides)</h2>

            <div className="presentAddress">  
            <label> Is Your Present Address Out Of India?

            <select value={this.state.presentAddress} onChange={this.handleSubmit}> 
           
                  <option name="yes">Yes</option>
                  <option name="no">No</option>
                  
                  

              </select>
              </label>
              </div>
              <div className="houseNo">
              <label htmlFor="houseNo">House No. and Street Name </label>
              <input
                
                placeholder="House No. and Street Name"
                type="text"
                name="houseNo"
                noValidate
                onChange={this.handleChange}
              />
              </div>

              <div className="village">
              <label htmlFor="houseNo">Village Or Town Or City </label>
              <input
                
                placeholder="Village Or Town Or City"
                type="text"
                name="village"
                noValidate
                onChange={this.handleChange}
              />
              </div>

              <div className="state">
              <label htmlFor="state">State/ Province</label>
              <input
                
                placeholder="State/ Province"
                type="text"
                name="state"
                noValidate
                onChange={this.handleChange}
              />
              </div>

              <div className="district">
              <label htmlFor="state">District</label>
              <input
                
                placeholder="District"
                type="text"
                name="district"
                noValidate
                onChange={this.handleChange}
              />
              </div>

              <div className="mobileNo">
              <label htmlFor="mobileNo">Mobile Number</label>
              <input
                className={formErrors.mobileNo.length > 0 ? "error" : null}
                placeholder="Mobile Number"
                type="text"
                name="mobileNo"
                noValidate
                onChange={this.handleChange}
              />
               {formErrors.mobileNo.length > 0 && (
                <span className="errorMessage">{formErrors.mobileNo}</span>
              )}
              </div>

              <div className="zipCode">
              <label htmlFor="state">Pin Code / Zip Code</label>
              <input
                className={formErrors.zipCode.length > 0 ? "error" : null}
                placeholder="Pin Code / Zip Code"
                type="text"
                name="zipCode"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.zipCode.length > 0 && (
                <span className="errorMessage">{formErrors.zipCode}</span>
              )}
              </div>

              <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="permenantAddress">  
            <label> Do You Have a Permanent Address?

            <select value={this.state.presentAddress} onChange={this.handleSubmit}> 
           
                  <option name="yes">Yes</option>
                  <option name="no">No</option>
                  
                  

              </select>
              </label>
              </div>



            <h2>Emergency Contact Details</h2>
            

            <div className="nameAddress">
              <label htmlFor="nameAddress">Name And Address</label>
              <input
              
                placeholder="Name and Address"
                type="text"
                name="nameAddress"
                noValidate
                onChange={this.handleChange}
              />
              
              <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            </div>
            <div className="mobileNo">
              <label htmlFor="mobileNo">Mobile Number</label>
              <input
                
                placeholder="Mobile Number"
                type="text"
                name="mobileNo"
                noValidate
                onChange={this.handleChange}
              />

            {formErrors.mobileNo.length > 0 && (
                <span className="errorMessage">{formErrors.mobileNo}</span>
              )}            
              </div>
             


            <div className="createAccount">
              <button type="submit">Submitt</button>

            </div>
          </form>
          </div>
          </div>
        
    );
  }
}

export default Form;