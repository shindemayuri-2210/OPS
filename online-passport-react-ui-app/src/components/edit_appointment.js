import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import UpdateAppointmentAction from '../actions/update_appointment';
import { Button } from 'react-bootstrap';

let appointmentIdRef;
let dateRef;
let scheduleAppointmentStatusRef;
let passportIdRef;
let dispatch;

const EditAppointmentForm = (props) => {
    appointmentIdRef = useRef(null);
    dateRef = useRef(null);
    scheduleAppointmentStatusRef = useRef(null);
    passportIdRef = useRef(null);
    dispatch = useDispatch();

    return (
        <div>
            <pre>
            <h1><i><center><b>Edit Appointment</b></center></i></h1>

            <h3><center>
                        Appointment ID      : <input type="text" readOnly= {true} ref={appointmentIdRef} value={props.appointment.appointmentId}/><br/><br/>
                        Date                : <input type="text" ref={dateRef} defaultValue={props.appointment.date} /><br/><br/>
                        AppointmentStatus   : <input type="text" ref={scheduleAppointmentStatusRef} defaultValue={props.appointment.scheduleAppointmentStatus}/><br/><br/>
                        Passport ID         : <input type="text" ref={passportIdRef} defaultValue={props.appointment.passportId}/><br/><br/><br/>
                        {getSpaces(15)}
                <Button className="btn btn-success" name="updateAppointment" value="UPDATE"  onClick={updateAppointment.bind(this, props)}>UPDATE</Button>{'\u00A0'} 
                <Button className="btn btn-cancel" name="cancelAppointment" value="CANCEL" onClick={props.renderAddAppointmentForm.bind(this)}>CANCEL</Button>
            </center></h3>
            </pre>
            </div>        
    );
}

function updateAppointment(props) {
    props.appointment.appointmentId = appointmentIdRef.current.value;
    props.appointment.date = dateRef.current.value;
    props.appointment.scheduleAppointmentStatusRef = scheduleAppointmentStatusRef.current.value;
    props.appointment.passportId = passportIdRef.current.value;
    dispatch(UpdateAppointmentAction(props.appointment)).then((response) => {
        props.renderAddAppointmentForm();
    })
}
function getSpaces(no) {
    var spaces = '';
    for(var i=0;i<no;i++) {
        spaces += '\u00A0';
    }
    return spaces;
}

export default EditAppointmentForm;