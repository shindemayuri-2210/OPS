const AppointmentReducer = (state={appointments: []}, action) => {
    switch(action.type) {
        case 'ADD_APPOINTMENT':
            state.appointments.push(action.payload);
            return state;
        case 'ADD_CANDIDATE':
            state.candidates.push(action.payload);
            return state;
        case 'GET_APPOINTMENT':
            state.appointments = action.payload;
            return state;
        case 'GET_APPOINTMENT_BY_ID':
            state.appointment = action.payload;
            return state;
        case 'DELETE_APPOINTMENT_BY_ID':
            state.appointment = action.payload;
            return state;
        case 'UPDATE_APPOINTMENT':
            return state;
        default:
            return state;

    }
}

export default AppointmentReducer;
