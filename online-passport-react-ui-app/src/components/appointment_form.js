import { useRef } from 'react';
import Appointment from '../models/appointment';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppointmentForm = (props) => {
    const dateRef = useRef(null);
    const scheduleAppointmentStatusRef = useRef(null);
    const passportIdRef = useRef(null);
    const addAppointment = () => { 
        props.addAppointment(new Appointment(dateRef.current.value, scheduleAppointmentStatusRef.current.value, passportIdRef.current.value));
    }
    return <div><h1><i></i></h1><br></br>
    
    <pre>   
        <h4>
        <u ref={dateRef}/><br/><br/>
        <u ref={scheduleAppointmentStatusRef} /><br/><br/>
        <u type="" ref={passportIdRef} /><br/><br/><br/>
        {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            <Button variant="primary" name="add" value="ADD APPOINTMENT" onClick={addAppointment}>ADD APPOINTMENT</Button>
    </h4>
    </pre>
    </div>
}

export default AppointmentForm;
