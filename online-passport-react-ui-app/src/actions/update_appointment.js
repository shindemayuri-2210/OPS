import axios from 'axios';

import { REST_API_BASE_URL } from '../utils/con1.js';

const UpdateAppointmentAction = (appointmentObj) => {
    return async function(dispatch) {
        const res = await axios.put(
            REST_API_BASE_URL + "/updateAppointmentById/" + appointmentObj.appointmentId,
                { 
                    date: appointmentObj.date,
                    scheduleAppointmentStatus: appointmentObj.scheduleAppointmentStatus,
                    passportId: appointmentObj.passportId,
                }, 
                { 
                    'Content-type': 'application/json; charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                }
            );
          console.log('Update Appointment serverResponse: ', res.data);
          dispatch({type: "UPDATE_APPOINTMENT", payload: res.data});

    }
}

export default UpdateAppointmentAction;
