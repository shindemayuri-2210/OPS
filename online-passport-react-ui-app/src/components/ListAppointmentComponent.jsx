import React, { Component } from 'react'
import AppointmentService from '../services/AppointmentService'
import './v.css';

class ListAppointmentComponent extends Component
{
    constructor(props) {
    super(props)

    this.state = {
            appointment: []
    }
    this.viewAppointment = this.viewAppointment.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
    this.editAppointment = this.editAppointment.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
}

deleteAppointment(appointmentId){
    AppointmentService.deleteAppointment(appointmentId).then( res => {
        this.setState({appointment: this.state.appointment.filter(appointment => appointment.appointmentId !== appointmentId)});
    });
}
viewAppointment(appointmentId){
    this.props.history.push(`/view-appointment/${appointmentId}`);
}
editAppointment(appointmentId){
    this.props.history.push(`/update-appointment/${appointmentId}`);
}

 componentDidMount(){
        AppointmentService.getAppointment().then((res) => {
            this.setState({ appointment: res.data});
        });
}

addAppointment(){
    
    this.props.history.push('/add-appointment/_add');
}
render() {
    return (
        
        <div>
            
             <h2><i>Appointment List</i></h2>
             <div className = "row" >
                <button className="btn btn-info" onClick={this.addAppointment}> Add Appointment</button>
             </div>
             <br></br>
             <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Appointment ID </th>
                                <th> Date </th>
                                <th> PassportId </th>
                                <th> scheduleAppointmentStatus </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.appointment.map(
                                    appointment => 
                                    <tr key = {appointment.appointmentId}>
                                         <td> {appointment.appointmentId} </td>
                                         <td> {appointment.date}</td>   
                                         <td> {appointment.passportId}</td>
                                         <td> {appointment.scheduleAppointmentStatus}</td>
                                         <td>
                                             <button onClick={ () => this.editAppointment(appointment.appointmentId)} className="btn btn-success">Update </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAppointment(appointment.appointmentId)} className="btn btn-danger">Delete </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewAppointment(appointment.appointmentId)} className="btn btn-success">View </button>
                                             
                                             
                                         </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

             </div>
            
        </div>

    )
}
}

export default ListAppointmentComponent
