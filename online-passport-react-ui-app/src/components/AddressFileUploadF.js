import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import Theme from './AddressProof';

const AddressFileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onMChange = e => {
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



    const [selectedFile] = useState('');



    // On file select (from the pop up)
    const onFileChange = event => {
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] });
    };
    // On file upload (click the upload button) 
    const onFileUpload = () => {
        // Create an object of formData
        const formData = new FormData();
        // Update the formData object 
        formData.append("file", this.state.selectedFile, this.state.selectedFile.name);
        // Details of the uploaded file
        console.log(this.state.selectedFile);
        // Request made to the backend api
        // Send formData object 
        axios.post("http://localhost:8085/AddressProof/upload", formData);
    };
    // File content to be displayed after 
    // file upload is complete
    const fileData = () => {
        if (this.state.selectedFile) {
            return (<div> <h2>File Details:</h2>
                <p>File Name: {this.state.selectedFile.name}</p>
                <p>File Type: {this.state.selectedFile.type}</p>
                <p> Last Modified:{" "}
                    {this.state.selectedFile.lastModifiedDate.toDateString()} </p>
                    <p>File Size: {this.state.selectedFile.size}</p>
            </div>);
        }
        else {
            return (<div> <br /> <h4>Choose before Pressing the Upload button</h4> </div>);
        }
    };
  };



  return (
    <Fragment>

      <div className="container-fluid mt-5 ">

        <form onSubmit={onSubmit}>
          <div className="row mt-2 ">

            <div className="col-sm-3 text-info" > <Theme /></div>

            <div className="col-sm-6 mt-3 form-control float-left shadow-lg p-3 mb-5 bg-black border border-dark rounded ">


              {message ? <Message msg={message} /> : null}




              <input
                type='file'
                className='custom-file-input '
                id='customFile'
               // onChange={onChange}
               onChange={e => { this.onFileChange(e); this.onMChange(e)}}
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
                className='btn-outline-primary mt-0  shadow-lg p-3 mb-5 bg-black border border-danger rounded'
                onClick={this.onFileUpload}
              />

            </div>
            {this.fileData()}
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
export default AddressFileUpload;
