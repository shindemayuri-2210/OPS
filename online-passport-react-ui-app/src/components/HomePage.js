import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Img1 from '../Images/img1.jpg';
import Img2 from '../Images/img2.jpg';
import Img5 from '../Images/img5.jpg';


class HomePage extends React.Component{
    render()
    {
        return(
                    <div >
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={Img1}
                                alt="First slide"
                                width="640"
                                height="600"
                            />
                            <Carousel.Caption>
                                <h3>Want to apply for passport?</h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={Img2}
                                alt="Second slide"
                                width="640"
                                height="600"
                            />
                            <Carousel.Caption>
                             <h2>Apply passport online hassle-free!</h2>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src={Img5}
                            alt="Third slide"
                            width="640"
                            height="600"
                            />
                            <Carousel.Caption>
                            <h3>Own your passport at your fingertips</h3>
                            <p></p>
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
        </div>
        );
    }
}
export default HomePage;