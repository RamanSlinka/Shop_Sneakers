
import ShoppingBag from "./components/ShoppingBag";
import Header from "./components/Header";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


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
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        axios.get("https://6138c162163b56001703a0b6.mockapi.io/items")
            .then((res) => {
                setItems(res.data)
            });
        axios.get("https://6138c162163b56001703a0b6.mockapi.io/cart")
            .then((res) => {
                setCartItems(res.data)
            });
        axios.get("https://6138c162163b56001703a0b6.mockapi.io/favorites")
            .then((res) => {
                setFavorites(res.data)
            });
    }, [])

    const onAddToCart = (obj) => {
        axios.post("https://6138c162163b56001703a0b6.mockapi.io/cart", obj)
        setCartItems(prev => [...prev, obj])
    }
    const onRemoveItem = (id) => {
        axios.delete(`https://6138c162163b56001703a0b6.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }
    const onAddToFavorite = async (obj) => {
        try{
            if(favorites.find(favObj => favObj.id === obj.id)) {
                axios.delete(`https://6138c162163b56001703a0b6.mockapi.io/favorites/${obj.id}`)
                setFavorites((prev) => prev.filter(item => item.id !== obj.id))
            } else {

                const {data} = await   axios.post(`https://6138c162163b56001703a0b6.mockapi.io/favorites`, obj)
                setFavorites((prev) => [...prev, data])
            }
        } catch (error) {
            alert('Failed to add to "selected"')
        }
    }
    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)

    }

    return (
        <div className="wrapper clear">

            {cartOpened && <ShoppingBag
                items={cartItems}
                onClose={() => setCartOpened(false)}
                onRemove={onRemoveItem}
            />}
            <Header
                onClickedCart={() => setCartOpened(true)}/>

            <Route path="/" exact>
                <Home items={items}
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                      onChangeSearchInput={onChangeSearchInput}
                      onAddToFavorite={onAddToFavorite}
                      onAddToCart={onAddToCart}
                />
            </Route>
            <Route path="/favorites" exact>
                <Favorites     items={favorites}
                               onAddToFavorite={onAddToFavorite}/>
            </Route>


        </div>
    );
}

export default App;
