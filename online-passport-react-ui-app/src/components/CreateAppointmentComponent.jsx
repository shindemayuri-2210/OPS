import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppointmentService from '../services/AppointmentService';
import './v.css'

class CreateAppointmentComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            appointmentId: this.props.match.params.appointmentId,
            date: '',
            passportId:  '',
            scheduleAppointmentStatus: '',
            p_type: '',
        }
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changePassportIdHandler = this.changePassportIdHandler.bind(this);
        this.changeScheduleStatusHandler = this.changeScheduleStatusHandler.bind(this);
        this.changeP_TypeHandler = this.changeP_TypeHandler.bind(this);

        this.cancel = this.cancel.bind(this);
    }

    addAppointment=(e)=>{
        e.preventDefault();
        let appointment ={date: this.state.date, passportId: this.state.passportId, scheduleAppointmentStatus: this.state.scheduleAppointmentStatus, p_type: this.state.p_type};
        console.log('appointment => ' + JSON.stringify(appointment));
        AppointmentService.createAppointment(appointment).then(res=>{
            
            this.props.history.push("/");
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

    changeScheduleStatusHandler= (event) => {
         this.setState({scheduleAppointmentStatus: event.target.value});
    }
    changeP_TypeHandler= (event) => {
        this.setState({p_type: event.target.value});
    }
    
    render() {
        return (
            <pre>
            <div class="o">
                
               <div className="container"  >
                    <div className="row" class="d">
                        <div className="card col-md-6 offset-md-3 offset-md-3" >
                            
                            <br></br>
                            <br></br><br></br>
                            <p >
                            
                            <div className = "card-body">
                                
                                
                                     
                                            <u 
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        
                                        
                                            
                                            <u
                                                value={this.state.passportId} onChange={this.changePassportIdHandler}/>
                                        
                                        
                                            
                                            <u
                                                value={this.state.scheduleAppointmentStatus} onChange={this.changeScheduleStatusHandler}/>
                                                                                
                                            
                                            <u
                                                value={this.state.p_type} onChange={this.changeP_TypeHandler}/>
                                        
                                     
                                        <button className="btn btn-success" onClick={this.addAppointment} style={{marginLeft: "190px"}}>ADD APPOINTMENT</button>
                                        <br></br>
                                        <br></br>
                                        <br></br><br></br>
                                    <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft: "220px"}}> Cancel </button>
                               
                                

                            </div>
                            </p>
                        </div>

                    </div>
               </div>
            </div>
            </pre>
        );
    }
}

export default CreateAppointmentComponent;