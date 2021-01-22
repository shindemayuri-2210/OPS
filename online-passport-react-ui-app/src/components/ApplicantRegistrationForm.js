import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import './ApplicantRegistrationForm.css'


const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    } else if (values.firstName.length < 2)  {
      errors.firstName = 'Minimum be 2 characters or more'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
      } else if (values.lastName.length < 2) {
        errors.lastName = 'Minimum be 2 characters or more'
      }
    if(!values.password) {
        errors.password= 'Required'
    }else if (!/^([a-zA-Z0-9@#*]{8,15})$/i.test(values.password)){
        errors.password='Invalid password'
    }

    return errors
  }


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

let ApplicantRegistrationForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
        <h4>Registration Form</h4>
        <br/>
      <div className="form-group">
        < Field name="firstName" component={renderField} label="First Name"/>
      </div>
      <div className="form-group">
        <Field name="lastName" component={renderField} label="Last Name" />
      </div>
      <div className="form-group">
        <Field name="email" component={renderField} label="Email" />
      </div>
      <div className="form-group">
        <Field name="password" component={renderField} label="Password" />
      </div>
      <div className="form-group">
        <Button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</Button>
      </div>
      Already registered? <Button variant="primary" name="login" value="LOGIN">LOGIN</Button>
    </form>
  )
}
ApplicantRegistrationForm = reduxForm({
  form: 'contact',
  validate,
})(ApplicantRegistrationForm);

export default ApplicantRegistrationForm;


