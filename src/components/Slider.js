import React from 'react';
import {Carousel} from "react-bootstrap";
import slide from "../common/Slider/1w.jpg"
import slide2 from "../common/Slider/2w.jpg"
import slide3 from "../common/Slider/3w.jpg"


const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide}
                    alt="First slide"
                />

            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;