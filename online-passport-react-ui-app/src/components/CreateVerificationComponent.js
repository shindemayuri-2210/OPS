import React, { Component } from 'react'
import VerificationService from '../services/VerificationService';

class CreateVerificationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            applicantCriminal: '',
            finalStatus: ''
           
        }
        this.changeCriminalHandler = this.changeCriminalHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.saveOrUpdateApplicant = this.saveOrUpdateApplicant.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            VerificationService.getApplicantById(this.state.id).then( (res) =>{
                let applicant = res.data;
                this.setState({
                    applicantCriminal: applicant.applicantCriminal,
                    finalStatus: applicant.finalStatus
                });
            });
        }        
    }
    saveOrUpdateApplicant = (e) => {
        e.preventDefault();
        let applicant = {applicantCriminal: this.state.applicantCriminal, finalStatus: this.state.finalStatus};
        console.log('applicant => ' + JSON.stringify(applicant));

        // step 5
        if(this.state.id === '_add'){
            VerificationService.createApplicant(applicant).then(res =>{
                this.props.history.push('/applicants');
            });
        }else{///........................................check
            VerificationService.updateApplicant(applicant, this.state.id).then( res => {
                this.props.history.push('/applicants');
            });
        }
    }
    
    changeCriminalHandler= (event) => {
        this.setState({applicantCriminal: event.target.value});
    }

    changeStatusHandler= (event) => {
        this.setState({finalStatus: event.target.value});
    }

    
    

    cancel(){
        this.props.history.push('/applicants');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Verification</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> CriminalRecord: </label>
                                            <input placeholder=" " name="applicantCriminal" className="form-control" 
                                                value={this.state.applicantCriminal} onChange={this.changeCriminalHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> FinalStatus: </label>
                                            <input placeholder=" " name="finalStatus" className="form-control" 
                                                value={this.state.finalStatus} onChange={this.changeStatusHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder=" " name="" className="form-control" 
                                               />
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateApplicant}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateVerificationComponent
