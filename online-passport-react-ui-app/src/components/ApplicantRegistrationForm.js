import { useRef } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ApplicantRegistrationForm.css'


const ApplicantRegistrationForm = (props) => {
    const applicantEmailIdRef = useRef(null);
    const applicantFirstNameRef = useRef(null);
    const applicantLastNameRef = useRef(null);
    const applicantPasswordRef = useRef(null);


    
    return <div className="centered"><h1>New Registration Form</h1><br></br>
    <h4> 
        Email Id: {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input type="text" ref={applicantEmailIdRef}/><br/><br/>
        First Name: {'\u00A0'}{'\u00A0'}{'\u00A0'}<input type="text" ref={applicantFirstNameRef} /><br/><br/>
        Last Name: {'\u00A0'}{'\u00A0'}{'\u00A0'}<input type="text" ref={applicantLastNameRef} /><br/><br/>
        Password: {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input type="text" ref={applicantPasswordRef} /><br/><br/><br/>
        {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
        <Button variant="primary" name="register" value="NEW REGISTRATION">REGISTER</Button><br/><br/>
        Already registered?{'\u00A0'}{'\u00A0'} <Button variant="primary" name="login" value="LOGIN" >LOGIN</Button>
    </h4>
    </div>
}

export default ApplicantRegistrationForm;
