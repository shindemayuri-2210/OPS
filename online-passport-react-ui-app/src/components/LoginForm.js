import { useRef } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ApplicantRegistrationForm.css'

const LoginForm = (props) => {
    const applicantEmailIdRef = useRef(null);
    const applicantPasswordRef = useRef(null);

   
    return <div className="centered"><h1>Login</h1><br></br>
    <h4> 
        Email Id: {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input type="text" ref={applicantEmailIdRef}/><br/><br/>
        
        Password: {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input type="text" ref={applicantPasswordRef} /><br/><br/><br/>
        {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
        <Button variant="primary" name="login" value="LOGIN">LOGIN</Button><br/><br/>
       
    </h4>
    </div>
}

export default LoginForm;
