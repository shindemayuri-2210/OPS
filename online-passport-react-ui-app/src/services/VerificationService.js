import axios from 'axios';

const Applicant_API_BASE_URL = "http://localhost:8085/Verification";

class VerificationService {

    getApplicantsV(){
        return axios.get(Applicant_API_BASE_URL+"/getAllApplicants");
    }


    createApplicant(applicant){
        return axios.post(Applicant_API_BASE_URL+"/applicant", applicant);
    }

    getApplicantById(applicantId){
        return axios.get(Applicant_API_BASE_URL + '/getApplicantById/' + applicantId);
    }
//...............
    updateApplicant(applicant, applicantId){
        return axios.put(Applicant_API_BASE_URL + '/ApplicantCriminal' + applicantId, applicant);
    }
    updateApplicantF(applicant, applicantId){
        return axios.put(Applicant_API_BASE_URL + '/updatefinalStatus' + applicantId, applicant);
    }
    deleteApplicant(applicantId){
        return axios.delete(Applicant_API_BASE_URL + '/deleteApplicantById/' + applicantId);
    }
}

export default  VerificationService;