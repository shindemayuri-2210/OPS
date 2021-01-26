import React, { Component } from 'react'
import VerificationService from '../services/VerificationService';

class ViewVerificationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.applicantID,
            applicant: {}
        }
    }

    componentDidMount(){
        VerificationService.getApplicantById(this.state.id).then( res => {
            this.setState({applicant: res.data});
        })
       
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View applicants Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> CriminalRecord: </label>
                            <div> { this.state.applicant.applicantCriminal }</div>
                        </div>
                        <div className = "row">
                            <label> FinalStatus: </label>
                            <div> { this.state.applicant.finalStatus }</div>
                        </div>
                      
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewVerificationComponent
