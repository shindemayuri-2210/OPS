import React from 'react';
import AddAppointmentAction from '../actions/add_appointment_action';
import AppointmentForm from './appointment_form';
import AppointmentTable from './appointment_table';
import GetAppointmentAction from '../actions/get_appointments_action';
import EditAppointmentForm from './edit_appointment';
import DeleteAppointmentAction from '../actions/delete_appointment';
import { Container, Row }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class AppointmentApp extends React.Component {
    constructor(props) {
        super(props);
        this.addAppointment = this.addAppointment.bind(this);
        this.renderEditAppointmentForm = this.renderEditAppointmentForm.bind(this);
        this.deleteAppointment = this.deleteAppointment.bind(this);
        this.renderAddAppointmentForm = this.renderAddAppointmentForm.bind(this);
        this.state = {appointment: [], renderForm: 'ADD_APPOINTMENT'};
    }   

    componentDidMount() {
        let appointmentFunc = this.props.store.dispatch(GetAppointmentAction());
        appointmentFunc.then((response)=>this.setState({appointments: this.props.store.getState().appointments}))
    }

    render() {
        var render_form = this.state.renderForm;

        if (render_form === 'ADD_APPOINTMENT')  {
            return <div>
                <Container>
                    <Row>
                        <AppointmentForm addAppointment={this.addAppointment} />
                    </Row>
                    <Row>
                    <AppointmentTable appointments={this.props.store.getState().appointments} renderEditAppointmentForm={this.renderEditAppointmentForm} deleteAppointment={this.deleteAppointment}/>
                    </Row>
                </Container>
            </div>
        }
        else if (render_form === 'EDIT_APPOINTMENT')  {
            return <div>
                <EditAppointmentForm appointment={this.state.selected_appointment} renderAddAppointmentForm={this.renderAddAppointmentForm}/>
            </div>        
        }
        else {
            return null;
        }
    }

    addAppointment(appointment) {
        let addAppointmentFunc =  this.props.store.dispatch(AddAppointmentAction(appointment));
        addAppointmentFunc.then((response)=> {
            this.setState({appointments: this.props.store.getState().appointments});
        });
        
    }
    renderEditAppointmentForm(appointment) {
        this.setState({ selected_appointment: appointment, renderForm: 'EDIT_APPOINTMENT'});
    }
    
    deleteAppointment(index, appointmentId) {
        this.props.store.dispatch(DeleteAppointmentAction(appointmentId))
            .then((response)=> {
                this.state.appointments.splice(index, 1);
                this.setState({appointments: this.state.appointments});        
            })
        this.setState({ renderForm: 'ADD_APPOINTMENT'});
    }
    renderAddAppointmentForm() {
        this.setState({ renderForm: 'ADD_APPOINTMENT'});
    }
}
export default AppointmentApp;
