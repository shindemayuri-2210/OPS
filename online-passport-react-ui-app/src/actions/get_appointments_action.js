import axios from 'axios';
import { REST_API_BASE_URL } from '../utils/con1.js';

let GetAppointmentAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            REST_API_BASE_URL + "/getAllAppointment",
            { 
                'Access-Control-Allow-Origin': '*'
            }
          );
          dispatch({type: "GET_APPOINTMENT", payload: res.data});
    }
}

export default GetAppointmentAction;
