import React from 'react';
import heartUnliked from "../common/gray_heart.png";
import sneakers from "../common/Sneakers/8.jpeg";
import plus from "../common/plus-icon.png";

const Card = () => {
    return (
        <div className='card '>
            <div className='favorite'>
                <img src={heartUnliked} alt="heartUnliked" width={20}/>
            </div>
            <img src={sneakers} alt="sneakers" width={133} height={112}/>
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, rerum!</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column '>
                    <span>Price: </span>
                    <b>399$</b>
                </div>
                <button className='button'>
                    <img src={plus} alt="plus" width={11}/>
                </button>
            </div>
        </div>
    );
};

export default Card;