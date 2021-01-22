import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import AppointmentReducer from './reducers/appointment_reducer';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

const appointmentStore = createStore(AppointmentReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={appointmentStore}>
      <BrowserRouter>
    <App1 store={appointmentStore}/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
