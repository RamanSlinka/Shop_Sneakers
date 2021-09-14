import React, {useContext} from 'react';
import arrowLeft from "../common/arrow_left_circle.svg";
import {AppContext} from "../App";

const Info = ({title, description, image}) => {

    const {setCartOpened} = useContext(AppContext);
    return (
        <div className="cartEmpty d-flex align-center  flex-column flex">
            <img
                className="mb-20 top" width="170px"
                src={image} alt="empty-cart"/>
            <h2>{title} </h2>
            <p className="opacity-6">{description}

            </p>
            <button
                onClick={()=> setCartOpened(false)}
                className="greenBtn">
                <img src={arrowLeft} alt="arrow" className="arrowLeft"/>
                Back
            </button>
        </div>
    );
};

export default Info;