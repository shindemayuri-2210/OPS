import axios from 'axios';
import { REST_API_BASE_URL } from '../utils/con1.js';

const AddAppointmentAction = (appointmentObj) => {
    return async function(dispatch) {
        const res = await axios.post(
            REST_API_BASE_URL + "/createAppointment",
                { 
                    date:appointmentObj.date,
                    scheduleAppointmentStatus:appointmentObj.scheduleAppointmentStatus,
                    passportId:appointmentObj.passportId,
                }, 
                { 
                    'Content-type': 'application/json; charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                }
            );
          console.log('Add Appointment serverResponse: ', res.data);
          dispatch({type: "ADD_APPOINTMENT", payload: res.data});

    }
}

export default AddAppointmentAction
