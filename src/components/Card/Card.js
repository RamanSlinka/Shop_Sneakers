import React, {useState} from 'react';
import heartUnliked from "../../common/gray_heart.png";
import heartLiked from "../../common/pink_heart.png";
import plus from "../../common/unchecked-svg.png";
import checked from "../../common/checkbox-green.jpg";
import styles from './Card.module.scss'

const Card = ({id, imageUrl, title, price, onFavorite, onPlus, selected= false}) => {
    const [isFavorite, setIsFavorite] = useState(selected)
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        onPlus(title, price, imageUrl);
        setIsAdded(!isAdded)
    }

    const onClickFavorites = () => {
        onFavorite({title, price, imageUrl, id});
        setIsFavorite(!isFavorite);
    };
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img
                    onClick={onClickFavorites}
                    src={isFavorite ? heartLiked :heartUnliked } alt="heartUnliked" width={20}/>
            </div>
            <img src={imageUrl} alt="sneakers" width={133} height={112}/>
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column '>
                    <span>Price: </span>
                    <b>{price}$</b>
                </div>

                <img src={!isAdded ? plus : checked} alt="plus"
                     className={styles.button}

                     onClick={onClickPlus}
                />

            </div>
        </div>
    );
};

export default Card;