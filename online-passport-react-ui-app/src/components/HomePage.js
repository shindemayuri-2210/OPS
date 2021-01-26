import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Img1 from '../Images/img1.jpg';
import Img6 from '../Images/img6.jpg';
import Img20 from '../Images/img20.jpg';


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
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={Img6}
                                alt="Second slide"
                                width="640"
                                height="600"
                            />
                            <Carousel.Caption>
                             
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src={Img20}
                            alt="Third slide"
                            width="640"
                            height="600"
                            />
                            <Carousel.Caption>
                           
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
        </div>
        );
    }
}
export default HomePage;