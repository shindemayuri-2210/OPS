import axios from 'axios';

const EMPLOYEE_API_BASE_URL_A = "http://localhost:8085/AddressProof";

class AddressProofService {

        createUpload(upload){
            return axios.post(EMPLOYEE_API_BASE_URL_A +"/upload",upload);
        }
/*
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
    */
}

export default new AddressProofService()