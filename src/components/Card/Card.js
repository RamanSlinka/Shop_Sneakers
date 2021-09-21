import React, { useState} from 'react';
import heartUnliked from "../../common/gray_heart.png";
import heartLiked from "../../common/pink_heart.png";
import plus from "../../common/plus.jpg";
import checked from "../../common/checkbox-green.jpg";
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader";

const Card = ({   id, imageUrl, title,
                  price, onFavorite,
                  onPlus, selected = false,
                  loading = false
              }) => {


    const [isFavorite, setIsFavorite] = useState(selected);
    const itemObj = {id, parentId: id, title, imageUrl, price};
    const [itemCheckBox, setItemCheckBox] = useState(false)

    const onClickPlus = () => {
        onPlus(itemObj);
        setItemCheckBox(!itemCheckBox)
        alert('Added to cart')
    }

    const onClickFavorites = () => {
        onFavorite(itemObj);
        setIsFavorite(!isFavorite);

    };

    return (
        <div className={styles.card}>
            {
                loading ? <ContentLoader
                        speed={2}
                        width={150}
                        height={250}
                        viewBox="0 0 150 240"
                        backgroundColor="#e0e0e0"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="98" rx="0" ry="0" width="150" height="16"/>
                        <rect x="4" y="59" rx="2" ry="2" width="142" height="26"/>
                        <rect x="0" y="0" rx="10" ry="10" width="150" height="90"/>
                        <rect x="-6" y="124" rx="0" ry="0" width="100" height="23"/>
                        <rect x="1" y="205" rx="0" ry="0" width="80" height="24"/>
                        <rect x="113" y="200" rx="8" ry="8" width="32" height="32"/>
                    </ContentLoader>
                    :
                    <>
                        {onFavorite && <div className={styles.favorite}>
                            <img
                                onClick={onClickFavorites}
                                src={isFavorite
                                    ? heartLiked
                                    : heartUnliked
                                } alt="heartUnliked" width={20}/>
                        </div>}
                        <img src={imageUrl} alt="sneakers" width={133} height={112}/>
                        <h5>{title}</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column '>
                                <span>Price: </span>
                                <b>{price}$</b>
                            </div>

                            {onPlus && (
                            <img className={styles.button}
                                            src={itemCheckBox ? checked : plus} alt="plus"
                                            // src={isItemAdded() ? checked : plus} alt="plus"
                                            onClick={onClickPlus}

                            />
                            )}
                        </div>
                    </>
            }


        </div>
    );
};

export default Card;