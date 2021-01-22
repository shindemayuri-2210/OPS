import './App.css';

import FileUpload from './components/FileUpload';
import AddressFileUpload from './components/AddressFileUpload';
function App() {
  return (
    <div className="App">
      <div className='container mt-4'>
        <h4 className='display-4 text-center mb-4'>
          <i className='fab f-react' />
         
          <FileUpload />
          <AddressFileUpload/>
        </h4>
      </div>
     
      

    </div>

  );
}

export default App;
