import React from 'react';
import logo from "../common/logo-sneakers.png";
import cart from "../common/cart-icon.jpg";
import user from "../common/user-login.jpg";
import heart from "../common/gray_heart.png";
import {Link} from "react-router-dom";

const Header = ({onClickedCart}) => {
    return (
        <header className='d-flex justify-between align-center p-40'>
            <Link to={'/'}>
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
                    <li className='mr-30 cu-p'
                        onClick={onClickedCart}
                    >
                        <img src={cart} width={30} height={30} alt="cart"/>
                        <span>  1212 $</span>
                    </li>
                    <li>
                        <Link to={'/favorites'}>
                            <img className='mr-30 cu-p'
                                 src={heart} height={30} width={30} alt="favorite"/>
                        </Link>
                    </li>
                    <li>
                        <img src={user} height={30} width={30} alt="user"/>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;