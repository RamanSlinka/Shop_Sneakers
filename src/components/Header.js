import React from 'react';
import logo from "../common/logo-sneakers.png";
import {Link} from "react-router-dom";
import {useCart} from "../hooks/useCart";
import {MdFavorite} from "@react-icons/all-files/md/MdFavorite";
import {AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import {SiShopify} from "@react-icons/all-files/si/SiShopify";
import {FcAbout} from "@react-icons/all-files/fc/FcAbout";
import {FaHome} from "@react-icons/all-files/fa/FaHome";



const Header = ({onClickedCart}) => {

    const { totalPrice} = useCart()

    return (
        <header className='d-flex justify-between align-center p-40'>
            <Link to={'/Shop_Sneakers'}>
                <div className='d-flex align-center'>

                    <img src={logo} className='logo' alt="logo"/>
                    <div className='descriptionShop'>
                        <h3 className='text-uppercase'>React Sneakers</h3>
                        <p>Shop Sneakers</p>
                    </div>
                </div>
            </Link>
            <div className='headerRight'>
                <ul className='d-flex'>
                    <Link to="/Shop_Sneakers"
                        className='mr-30 cu-p'>
                        <FaHome    size={30}
                                    color={'#66a6ff'}
                        />
                    </Link>
                    <Link to="/about"
                        className='mr-30 cu-p'>
                        <FcAbout    size={30}
                                    color={'#66a6ff'}
                        />
                    </Link>

                    <Link to="/orders">
                        <SiShopify
                            className='mr-20 cu-p'
                            size={30}
                            color={'#66a6ff'}
                        />
                    </Link>

                        <Link to='/favorites'>
                            <MdFavorite
                                className='mr-20 cu-p'
                                size={30}
                            color={'#66a6ff'}
                            />
                        </Link>


                    <li className='mr-20 cu-p'
                        onClick={onClickedCart}
                    >
                        <AiOutlineShoppingCart
                            size={30}
                            color={'#66a6ff'}
                        />
                        <span className='pb-20'>  {totalPrice} $</span>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;