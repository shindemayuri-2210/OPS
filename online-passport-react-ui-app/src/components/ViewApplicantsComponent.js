import React, { Component } from 'react'
import ApplicantService from '../services/ApplicantService'

class ViewApplicantsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            applicantId: this.props.match.params.applicantId,
            applicant: {}
        }
    }

    componentDidMount(){
        ApplicantService.getApplicantById(this.state.applicantId).then( res => {
            this.setState({applicant: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Applicant Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>  First Name: </label>
                            <div> { this.state.applicant.firstName }</div>
                        </div>
                        <div className = "row">
                            <label>  Last Name: </label>
                            <div> { this.state.applicant.lastName }</div>
                        </div>
                        <div className = "row">
                            <label>  Email ID: </label>
                            <div> { this.state.applicant.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewApplicantsComponent