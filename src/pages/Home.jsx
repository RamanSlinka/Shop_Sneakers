import React from 'react';
import removeBtn from "../common/button-delete.jpg";
import Card from "../components/Card/Card";
import {FcSearch} from "@react-icons/all-files/fc/FcSearch";
import Slider from "../components/Slider";


const Home = ({
                  items, onAddToCart,
                  onAddToFavorite, onChangeSearchInput,
                  searchValue, setSearchValue, isLoading
              }) => {


    const clearInput = (e) => {

            if (e.key === 'Enter')
            {setSearchValue('')}
    }


    const renderItems = () => {
        const filteredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return (isLoading ? [...Array(16)] : filteredItems).map((item, index) => (
            <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                loading={isLoading}
                {...item}

            />
        ));

    }


    return (
        <div>
            <Slider/>
            <div className="content p-40" >

                <div className='d-flex align-center mb-40 justify-between'>

                    <h1>{searchValue ? `Search by request: "${searchValue}"` : 'All Sneakers'}</h1>
                    <div className='search-block d-flex'>
                        <FcSearch size={33}/>
                        {searchValue && <img src={removeBtn} alt="clear"
                                             width={30} className='removeBtn cu-p clear'
                                             onClick={() => setSearchValue('')}
                        />}
                        <input type="text" placeholder="Search..."
                               onChange={onChangeSearchInput}
                               value={searchValue}
                               onKeyPress={clearInput}

                        />
                    </div>
                </div>


                <div className='d-flex flex-wrap '>
                    {renderItems()}
                </div>
            </div>
        </div>
    );
};

export default Home;