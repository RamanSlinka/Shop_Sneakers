import search from './common/Search.ico'
import Card from "./components/Card/Card";
import ShoppingBag from "./components/ShoppingBag";
import Header from "./components/Header";

import {useEffect, useState} from "react";
import removeBtn from "./common/button-delete.jpg";

// const a = [
//
//     {
//         "title": "Air Max 270 React DA4288 001 Black/Chile Red/Bleached Aqua",
//         "imageUrl": "/Sneakers/1.jpeg",
//         "price": 199
//     },
//     {
//         "title": "RS-X Millennium Puma Black/Puma White",
//         "imageUrl":"/Sneakers/2.jpeg",
//         "price": 299
//     },
//     {
//         "title": "S1MYRTLE02/LEA Black",
//         "imageUrl": "/Sneakers/12.jpeg",
//         "price": 279
//     },
//     {
//         "title": "Chunky 21SSKP22 2000",
//         "imageUrl": "/Sneakers/11.jpeg",
//         "price": 129
//     },
//     {
//         "title": "S1MERRILL01/NYS Navy",
//         "imageUrl": "/Sneakers/9.jpeg",
//         "price": 279
//     },
//     {
//         "title": "Nike Air Max 95 CZ0191-400",
//         "imageUrl": "/Sneakers/10.jpeg",
//         "price": 179
//     },
//     {
//         "title": "adidas Multix J G55537",
//         "imageUrl": "/Sneakers/8.jpeg",
//         "price": 219
//     },
//     {
//         "title": "adidas ZX 2K J Boost GY2682",
//         "imageUrl": "/Sneakers/7.jpeg",
//         "price": 179
//     },
//     {
//         "title": "Nike Air Max 95 SE DC3991-400",
//         "imageUrl": "/Sneakers/6.jpeg",
//         "price": 259
//     },
//     {
//         "title": "RS-X Millennium Puma Black/Puma White",
//         "imageUrl": "/Sneakers/5.jpeg",
//         "price": 299
//     },
//     {
//         "title": "S1MYRTLE02/LEA Black",
//         "imageUrl": "/Sneakers/4.jpeg",
//         "price": 279
//     },
//     {
//         "title": "Chunky 21SSKP22 2000",
//         "imageUrl": "/Sneakers/3.jpeg",
//         "price": 129
//     }, {
//         "title": "Chunky 21SSKP22 2000",
//         "imageUrl": "/Sneakers/14.jpeg",
//         "price": 129
//     },
//     {
//         "title": "S1MERRILL01/NYS Navy",
//         "imageUrl": "/Sneakers/15.jpg",
//         "price": 279
//     },
//     {
//         "title": "Nike Air Max 95 CZ0191-400",
//         "imageUrl": "/Sneakers/16.jpg",
//         "price": 179
//     },
//     {
//         "title": "adidas Multix J G55537",
//         "imageUrl": "/Sneakers/17.jpeg",
//         "price": 219
//     },
//
// ]


function App() {

    const [cartOpened, setCartOpened] = useState(false);
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        fetch("https://6138c162163b56001703a0b6.mockapi.io/items").then(res => {
            return res.json()
        }).then(json => {
            setItems(json)
        })
    }, [])

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj])
    }

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)

    }

    return (
        <div className="wrapper clear">

            {cartOpened && <ShoppingBag
                items={cartItems}
                onClose={() => setCartOpened(false)}/>}
            <Header
                onClickedCart={() => setCartOpened(true)}/>


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
                    {items.filter((item) => item.title.toLowerCase().includes(searchValue))
                        .map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onFavorite={() => {
                            }}
                            onPlus={(obj) => onAddToCart(item)}
                        />
                    ))}


                </div>


            </div>
        </div>
    );
}

export default App;
