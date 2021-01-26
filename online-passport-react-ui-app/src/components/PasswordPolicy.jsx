import React from 'react';
import { Button } from 'react-bootstrap';
class PasswordPolicy extends React.Component{
    back(){
        this.props.history.push("/ApplicantRegistrationForm");
      }
    render(){
        return(
            <div class="p-3 mb-2 bg-dark text-white">
                <h2>Password Policy</h2>
                <ul>
                    <li>PASSWORD MUST BE MINIMUM EIGHT CHARACTERS</li>
                       <li> MUST HAVE ATLEAST ONE UPPERCASE LETTER</li>
                <li> MUST HAVE ATLEAST ONE LOWERCASE LETTER</li>
                     <li> MUST HAVE ONE DIGIT AND ONE SPECIAL CHARACTER </li>
                    </ul>
                    
                    <Button variant="primary" name="login" value="LOGIN" onClick={() => this.back()}>BACK</Button>
       </div>
        );

        }
}
   
   





export default PasswordPolicy;