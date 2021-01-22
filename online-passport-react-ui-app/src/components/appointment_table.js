import React from 'react';
import { Button } from 'react-bootstrap';

const AppointmentTable = (props) => {
    return (
        <div><center>
            <table border='3'>
            <thead>
            <tr>
                <th>Appointment ID</th>
                <th>Appointment DATE</th>
                <th>Appointment STATUS</th>
                <th>PASSPORT ID</th>
                <th>ACTIONS</th>
            </tr>
            </thead>
            <tbody>
            {props.appointments.map((appointment, index) =>
         (<tr key={index}><td align="center">{appointment.appointmentId}</td><td align="center">{appointment.date}</td><td align="center">{appointment.scheduleAppointmentStatus}</td><td align="center">{appointment.passportId}</td>
                    <td>
                            <Button className="btn btn-success" value="EDIT" onClick={props.renderEditAppointmentForm.bind(this, appointment, props)}>EDIT</Button>&nbsp;
                            <Button variant="primary" value="DELETE" onClick={props.deleteAppointment.bind(this, index, appointment.appointmentId)} >DELETE</Button>                                          
                    </td>
        </tr>)
            )
}
            </tbody>
            </table>
            </center>
        </div>        
    )
}
export default AppointmentTable;