import React, { Component } from 'react'
import ApplicantService from '../services/ApplicantService'

class ListApplicantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            applicantId:this.props.match.params.applicantId,
                applicant: []
        }
       // this.addEmployee = this.addEmployee.bind(this);
        //this.editApplicants = this.editApplicants.bind(this);
        this.deleteApplicant = this.deleteApplicant.bind(this);
    }
    componentDidMount(){
        ApplicantService.getAllApplicants().then((res) => {
            this.setState({ applicant: res.data});
            console.log(res.data);
        });
    }

    deleteApplicant(applicant_Id){
        ApplicantService.deleteApplicant(applicant_Id).then( res => {
            this.setState({applicant: this.state.applicant.filter(applicants => applicants.applicant_Id !== applicant_Id)});
        });
    }
     viewApplicants(applicantId){
        this.props.history.push(`/ViewApplicantsComponent/${applicantId}`);
    }
    editApplicants(applicantId){
        this.props.history.push(`/ApplicantRegistrationForm/${applicantId}`);
    }


//  addEmployee(){
  //   this.props.history.push('/ApplicantRegistrationForm');
    //}

    render() {
        return (
            <div>
                 <h2 className="text-center">Registered Applicants List</h2>
                 <div className = "row">
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.applicant.map(
                                        applicant => 
                                        <tr key = {applicant.applicantId}>
                                             <td> { applicant.firstName} </td>   
                                             <td> {applicant.lastName}</td>
                                             <td> {applicant.emailId}</td>
                                             <td>
                                                 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteApplicant(applicant.applicant_Id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewApplicants(applicant.applicantId)} className="btn btn-info">View </button>
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

export default ListApplicantComponent