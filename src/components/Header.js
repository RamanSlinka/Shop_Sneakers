import React from 'react';
import logo from "../common/logo-sneakers.png";
import cart from "../common/cart-icon.jpg";
import user from "../common/user-login.jpg";

const Header = ({onClickedCart}) => {
    return (
        <header className='d-flex justify-between align-center p-40'>
            <div className='d-flex align-center'>
                <img src={logo} className='logo'/>
                <div className='descriptionShop'>
                    <h3 className='text-uppercase'>React Sneakers</h3>
                    <p>Shop Sneakers</p>
                </div>
            </div>
            <div className='headerRight'>
                <ul className='d-flex'>
                    <li className='mr-30 cu-p'
                        onClick={onClickedCart}
                    >
                        <img src={cart} width={30} height={30}/>
                        <span>  1212 $</span>
                    </li>
                    <li>
                        <img src={user} height={30} width={30}/>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;