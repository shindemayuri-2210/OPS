import axios from 'axios';

const PASSPORTAPPLICATION_API_BASE_URL = "http://localhost:8089/api/v1";

class PassportApplicationService {

   // getEmployees(){
    //    return axios.get(EMPLOYEE_API_BASE_URL);
    //}

    createNewPassportApplication(applicant){
        return axios.post(PASSPORTAPPLICATION_API_BASE_URL+'/createNewPassportApplication',applicant);
    }

   getPassportApplicationById(passportapplicationId){
        return axios.get(PASSPORTAPPLICATION_API_BASE_URL + '/' + passportapplicationId);
    }

    updateEmployee(application, passportApplicantId){
        return axios.put(PASSPORTAPPLICATION_API_BASE_URL + '/' + passportApplicantId, application);
    }

   /* deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }*/
}

export default new PassportApplicationService()