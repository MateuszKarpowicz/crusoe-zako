import React from 'react';
import { Carousel } from 'react-bootstrap';
import sliderImage1 from '../assets/apartment/image8.webp';
import sliderImage2 from '../assets/apartment/image2.webp';
import sliderImage3 from '../assets/apartment/image3.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/BootstrapSlider.scss'

function BootstrapSlider() {
    return (
        <div className='content-slider'>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={sliderImage1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={sliderImage2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={sliderImage3} alt="Third slide" />
            </Carousel.Item>
        </Carousel>
        </div>
    );
    
}

export default BootstrapSlider;