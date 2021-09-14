import React, {useContext} from 'react';
import Card from "../components/Card/Card";
import {AppContext} from '../App'

const Favorites = () => {

    const {favorites, onAddToFavorite} = useContext(AppContext)
    return (
        <div className="content p-40">
            <div className='d-flex align-center mb-40 justify-between'>
                <h1>My bookmarks</h1>
            </div>
            <div className='d-flex flex-wrap '>

                {favorites.map((item, index) => (
                    <Card
                        key={index}
                        selected={true}
                        onFavorite={onAddToFavorite}
                        {...item}
                    />
                ))}

            </div>


        </div>);
};

export default Favorites;