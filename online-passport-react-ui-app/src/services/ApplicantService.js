import axios from 'axios';

const APPLICANT_API_BASE_URL = "http://localhost:8089/applicant";

class ApplicantService {

    getAllApplicants(){
        return axios.get(APPLICANT_API_BASE_URL+'/getAllApplicants');
    }
    createNewApplicant(applicant){
        return axios.post(APPLICANT_API_BASE_URL+'/createNewApplicant',applicant);
    }
    login(applicantLogin){
        return axios.post(APPLICANT_API_BASE_URL +'/login',applicantLogin);
    }
    adminLogin(adminLogin){
        return axios.post(APPLICANT_API_BASE_URL + '/adminLogin',adminLogin);
    }

    getApplicantById(applicantId){
        return axios.get(APPLICANT_API_BASE_URL + '/getApplicantById' + applicantId);
    }

    deleteApplicant(applicantId){
        return axios.delete(APPLICANT_API_BASE_URL + '/deleteApplicant' + applicantId);
    }
}

export default new ApplicantService()