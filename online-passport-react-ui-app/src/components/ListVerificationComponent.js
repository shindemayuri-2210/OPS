import React, { Component } from 'react'
import VerificationService from '../services/VerificationService'

class ListVerificationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                applicants: []
        }
        this.editApplicant = this.editApplicant.bind(this);
        this.deleteApplicant = this.deleteApplicant.bind(this);
    }

    deleteApplicant(id){
        VerificationService.deleteApplicant(id).then( res => {
            this.setState({applicants: this.state.applicants.filter(applicant => applicant.id !== id)});
        });
    }
    viewApplicant(id){
        this.props.history.push(`/view-applicant/${id}`);
    }
    editApplicant(id){
        this.props.history.push(`/add-applicant/${id}`);
    }

    componentDidMount(){

        VerificationService.getApplicantsV()
        .then((res) => {
            this.setState({ applicants: res.data});
        });
    }
   
    

    addApplicant(){
        this.props.history.push('/add-applicant/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Applicant List For Verification</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addApplicant}> Add Applicant</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Applicant ID</th>
                                    <th> CriminalRecord</th>
                                    <th> FinalStatus</th>
                                     <th> UpdateAction</th>
                                    <th> AddressProof</th>
                                    <th> BirthProof</th>
                                    <th> Photo</th>
                                    <th> Signature</th>
                                    <th> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.applicants.map(
                                        applicant => 
                                        <tr key = {applicant.applicantID}>
                                             <td> { applicant.applicantCriminal} </td>   
                                             <td> {applicant.finalStatus}</td>
                                        
                                             <td>
                                                 <button onClick={ () => this.editApplicant(applicant.applicantID)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteApplicant(applicant.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewApplicant(applicant.id)} className="btn btn-info">View </button>
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

export default ListVerificationComponent
