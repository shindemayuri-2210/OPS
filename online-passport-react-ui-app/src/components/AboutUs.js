import React from 'react';
//import Img1 from '../Images/rental3.jpg';
//import Img2 from '../Images/rental5.jpg';
//import Img3 from '../Images/rental1.jpg';
import Img3 from '../Images/img3.png';
import Img11 from '../Images/img11.jpg';
import Img12 from '../Images/img12.png';

class AboutUs extends React.Component{
    render()
    {
        return(
             <div>
                    <div >
                           <h1 className="text-primary text-center pt-2">Own your passport at your fingertips!</h1>
                    <div className="row pt-2" >
                        <div className="col-sm-4">
                            <div className="card bg-light border-dark mb-3">
                              <div class="card-header">
                                <img
                                    className="center d-block w-100"
                                    src={Img3}
                                    alt="Third slide"
                                    width="600"
                                    height="200"
                                    />     
                              </div>
                            <div className="card-body">
                                    <h4 className="card-title">Apply passport online, Not in Line!</h4>
                                    <p className="card-text">Get your passport hassle-free. </p>     
                        </div>
                    </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card bg-light border-dark">
                            <div class="card-header">
                            <img
                                    className="center d-block w-100"
                                    src={Img11}
                                    alt="Third slide"
                                    width="700"
                                    height="200"
                                    /> 
                            </div>
                                <div className="card-body">
                                    <h4 className="card-title">Simplify!</h4>
                                    <p className="card-text">Benifiting citizens by easing out the process of passport issuance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card bg-light border-dark">
                            <div class="card-header">
                            <img
                                    className="center d-block w-100"
                                    src={Img12}
                                    alt="Third slide"
                                    width="600"
                                    height="200"
                                    /> 
                            </div>
                                <div className="card-body">
                                    <h4 className="card-title">Services</h4>
                                    <p className="card-text">With Better services,get your passport in a convenient way.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
        </div>
        );
    }
}
   export default AboutUs;