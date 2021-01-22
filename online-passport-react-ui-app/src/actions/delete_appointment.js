import axios from 'axios';
import { REST_API_BASE_URL } from '../utils/con1.js';

const DeleteAppointmentAction = (appointmentId) => {
    return async function(dispatch) {
        const res = await axios.delete(
            REST_API_BASE_URL + "/deleteAppointmentById/" + appointmentId, { 
                headers: { 
                    'Content-type': 'application/json; charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                }
            });
          console.log('Delete Appointment serverResponse: ', res.data);
          dispatch({type: "DELETE_APPOINTMENT_BY_ID", payload: res.data});

    }
}
export default DeleteAppointmentAction;
