import React, { Component } from 'react'
import VerificationService from '../services/VerificationService';

class UpdateVerification extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.applicantID,
            applicantCriminal: '',
            finalStatus: ''
           
        }
        this.changeCriminalHandler = this.changeCriminalHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.updateApplicant = this.updateApplicant.bind(this);
    }

    componentDidMount(){
        VerificationService.getApplicantById(this.state.id).then( (res) =>{
            let applicant = res.data;
            this.setState({
                applicantCriminal: applicant.applicantCriminal,
                finalStatus: applicant.finalStatus
            });
        });
    }

    updateApplicant = (e) => {
        e.preventDefault();
        let applicant = {applicantCriminal: this.state.applicantCriminal, finalStatus: this.state.finalStatus};
        console.log('applicant => ' + JSON.stringify(applicant));
        console.log('id => ' + JSON.stringify(this.state.id));
        VerificationService.updateApplicant(applicant, this.state.id).then( res => {
            this.props.history.push('/applicants');
        });
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

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update applicant</h3>
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


                                        <button className="btn btn-success" onClick={this.updateApplicant}>Save</button>
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

export default UpdateVerification
