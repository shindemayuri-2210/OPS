import React, { Component } from 'react';
import AppointmentService from '../services/AppointmentService';

class UpdateAppointmentComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            appointmentId: this.props.match.params.appointmentId,
            date: '',
            passportId: '',
            scheduleAppointmentStatus: '',
            p_type: '',

        }
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changePassportIdHandler = this.changePassportIdHandler.bind(this);
        this.changescheduleAppointmentStatusHandler = this.changescheduleAppointmentStatusHandler.bind(this);
        this.changeP_TypeHandler = this.changeP_TypeHandler.bind(this);
        this.updateAppointment = this.updateAppointment.bind(this);

    }
    componentDidMount(){
        AppointmentService.getAppointmentById(this.state.appointmentId).then( (res) =>{
            let appointment = res.data;
            this.setState({date: appointment.date,
                passportId: appointment.passportId,
                scheduleAppointmentStatus : appointment.scheduleAppointmentStatus,
                p_type : appointment.p_type});
            console.log("appointment=>" + JSON.stringify(appointment));
        });
    }

    updateAppointment=(e)=>{
       
        e.preventDefault();
        let appointment = {date: this.state.date, passportId: this.state.passportId, scheduleAppointmentStatus: this.state.scheduleAppointmentStatus, p_type: this.state.p_type};
        console.log('appointment => ' + JSON.stringify(appointment));
       
        
        AppointmentService.updateAppointment(this.state.appointmentId,appointment).then( res => {
            
            
            this.props.history.push('/');
        })

    }

    cancel = ()=>{
        this.props.history.push("/");
    }
    
    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }

    changePassportIdHandler= (event) => {
        this.setState({passportId: event.target.value});
    }

    changescheduleAppointmentStatusHandler= (event) => {
        this.setState({scheduleAppointmentStatus: event.target.value});
    }

    changeP_TypeHandler= (event) => {
        this.setState({p_type: event.target.value});
    }
    
    render() {
        return (
            <form>
            <div>
               <div class="i" className="container" >
                    <div className="row" >
                        <div class="t" >
                            <h3 >Update Appointment</h3>
                            <div  className = "card-body">
                                <form >
                                        <div  className = "date" >
                                            <label > Date: </label>
                                            <input  placeholder="Date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>

                                        
                                        <div class="k"className = "form-group" >
                                            <label > Passport Id: </label>
                                            <input  placeholder="Passport Id" name="passportId" className="form-control" 
                                                value={this.state.passportId} onChange={this.changePassportIdHandler}/>
                                        </div>
                                        <div className = "form-group" >
                                            <label> AppointmentStatus: </label>
                                            <input placeholder="scheduleAppointmentStatus" name="scheduleAppointmentStatus" className="form-control" 
                                                value={this.state.scheduleAppointmentStatus} onChange={this.changescheduleAppointmentStatusHandler}/>
                                        </div>
                                        {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                                        <br></br>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                                        <button className="btn btn-success" onClick={this.updateAppointment}>Update</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                </form>

                            </div>
                        </div>

                    </div>
               </div>
            </div>
            </form>
        );
    }
}

export default UpdateAppointmentComponent;