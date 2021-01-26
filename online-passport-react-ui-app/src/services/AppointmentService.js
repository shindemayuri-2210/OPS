import axios from 'axios';

const APPOINTMENT_API_BASE_URL = "http://localhost:8089/api/v1";

class AppointmentService {

    getAppointment()
    {
        return axios.get(APPOINTMENT_API_BASE_URL+'/getAllAppointment');
    }

    getAppointmentById(appointmentId){
        return axios.get(APPOINTMENT_API_BASE_URL + '/getAppointmentById/' + appointmentId);
    }
    createAppointment(appointment){
        
        return axios.post(APPOINTMENT_API_BASE_URL + '/createAppointment' , appointment);
    }
    updateAppointment(appointmentId,appointment){   
     
        return axios.put(APPOINTMENT_API_BASE_URL + '/updateAppointmentById/'+appointmentId,appointment);
    }
    deleteAppointment(appointmentId)
    {
        return axios.delete(APPOINTMENT_API_BASE_URL + '/deleteAppointmentById/'+ appointmentId);
    }

}
export default new AppointmentService()
