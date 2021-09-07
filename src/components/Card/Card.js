import React from 'react';
import heartUnliked from "../../common/gray_heart.png";
import plus from "../../common/plus-icon.png";
import styles from './Card.module.scss'

const Card = ({imageUrl, title, price}) => {
    return (
        <div className={styles.card} >
            <div className={styles.favorite}>
                <img src={heartUnliked} alt="heartUnliked" width={20}/>
            </div>
            <img src={imageUrl} alt="sneakers" width={133} height={112}/>
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column '>
                    <span>Price: </span>
                    <b>{price}$</b>
                </div>
                <button className={styles.button}
                onClick={() =>{}}
                >
                    <img src={plus} alt="plus" width={11}/>
                </button>
            </div>
        </div>
    );
};

export default Card;