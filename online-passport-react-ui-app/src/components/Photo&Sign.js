import PhotoUpload from './PhotoUpload';
import SignUpload from './SignUpload';
function PhotoSign() {
  return (
    <div className="App">
      <div className='container mt-4  '>
        <h4 className='display-4 text-center mb-4'>
          <i className='fab f-react' />
         
          <PhotoUpload />
          <SignUpload/>
        </h4>
      </div>
     
      

    </div>

  );
}

export default PhotoSign;
