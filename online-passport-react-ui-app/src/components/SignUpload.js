import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';

const SignUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      <h1 className="shadow-lg p-1 mb-5 bg-white border border-warning rounded heading" >Signature </h1>

      <div className="container-fluid mt-5 ">

        <form onSubmit={onSubmit}>
          <div className="row mt-2 ">


            <div className="col-sm-4 mt-3 form-control float-left shadow-lg p-3 mb-5 bg-black border border-dark rounded ">


              {message ? <Message msg={message} /> : null}




              <input
                type='file'
                className='custom-file-input '
                id='customFile'
                onChange={onChange}
              />
              <label className='custom-file-label' htmlFor='customFile'>
                {filename}
              </label>

            </div>
            <div className="float-right col-sm-1"></div>
            <div>
              <input
                type='submit'
                value='Upload'
                className='btn btn-outline-primary mt-0  shadow-lg p-3 mb-5 bg-black border border-danger rounded'
                
              />

            </div>

          </div>
          <div className="row mt-2">
            <div className="col-sm-12 ">
              <Progress percentage={uploadPercentage} />
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default SignUpload;
