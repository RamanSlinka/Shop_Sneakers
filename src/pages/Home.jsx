import React from 'react';
import search from "../common/Search.ico";
import removeBtn from "../common/button-delete.jpg";
import Card from "../components/Card/Card";

const Home = ({
                  items, onAddToCart,cartItems,
                  onAddToFavorite, onChangeSearchInput,
                  searchValue, setSearchValue,isLoading
              }) => {

    const renderItems = () => {
        const filteredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
            );
        return (isLoading ? [...Array(16)] : filteredItems).map((item, index) => (
                <Card
                    key={index}
                    onFavorite={onAddToFavorite}
                    onPlus={(obj) => onAddToCart(item)}
                    added={cartItems.some(obj => +obj.id === +item.id)}
                    isLoading={isLoading}
                    {...item}

                />
            ));

    }


    return (
        <div className="content p-40">
            <div className='d-flex align-center mb-40 justify-between'>
                <h1>{searchValue ? `Search by request: "${searchValue}"` : 'All Sneakers'}</h1>
                <div className='search-block d-flex'>
                    <img src={search} alt="search" className='search-icon'/>
                    {searchValue && <img src={removeBtn} alt="clear"
                                         width={30} className='removeBtn cu-p clear'
                                         onClick={() => setSearchValue('')}
                    />}
                    <input type="text" placeholder="Search"
                           onChange={onChangeSearchInput}
                           value={searchValue}
                    />
                </div>
            </div>


            <div className='d-flex flex-wrap '>


                {renderItems()}


            </div>


        </div>
    );
};

export default Home;