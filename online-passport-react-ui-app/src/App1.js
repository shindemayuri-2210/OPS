import './App.css';
//import ProductApp from './components/product_app';
//import ProductAppFunc from './components/product_app_func';
import AppointmentApp from './components/appointment_app';
function App1(props) {
  return (
    <div className="App1">
      <AppointmentApp store={props.store} />
    </div>
  );
}

export default App1;
