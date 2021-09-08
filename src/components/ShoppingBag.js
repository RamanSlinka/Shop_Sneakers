import React from 'react';
import removeBtn from "../common/button-delete.jpg";
import arrow from "../common/arrow.png";
import emptyCart from "./../common/shopping-cart.jpg"
import arrowLeft from "./../common/arrow_left_circle.svg"


const ShoppingBag = ({onClose, items = [], onRemove}) => {
    return (
        <div className='overlay'>
            <div className="drawer">
                <h2 className='mb-30 d-flex justify-between'>Shopping Bag
                    <img src={removeBtn} alt="Remove"
                         width={30} className='removeBtn cu-p'
                         onClick={onClose}
                    />
                </h2>
                {items.length > 0
                    ?
                    <div>
                        <div className="items">
                            {items.map((obj, index) => (
                                <div key={index} className="cartItem d-flex align-center mb-20">

                                    <img src={obj.imageUrl} alt="sneakers" width={70} height={70} className='mr-20'/>
                                    <div className='mr-20 flex'>
                                        <p className='mb-5'>{obj.title}</p>
                                        <b>{obj.price}$</b>
                                    </div>
                                    <img
                                        onClick={()=>onRemove(obj.id)}
                                        src={removeBtn} alt="Remove"
                                        width={30} className='removeBtn'/>
                                </div>

                            ))}

                        </div>
                        <div className='downBlock'>
                            <ul className='cartTotalBlock'>
                                <li>
                                    <span>Total</span>
                                    <div></div>
                                    <b>11000$</b>
                                </li>
                                <li>
                                    <span>Sale</span>
                                    <div></div>
                                    <b>5%</b>
                                </li>
                            </ul>
                            <button className='greenBtn'>Place an order
                                <img src={arrow} alt='arrow' width={20} className='arrow'/>
                            </button>
                        </div>
                    </div>
                    :
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img
                            className="mb-20" width="120px" height="120px"
                            src={emptyCart} alt="empty-cart"/>
                        <h2> Empty cart</h2>
                        <p className="opacity-6">Add at least 1 pair of sneakers to order </p>
                        <button
                            onClick={onClose}
                            className="greenBtn">
                            <img src={arrowLeft} alt="arrow" className="arrowLeft"/>
                            Back
                        </button>
                    </div>
                }




            </div>
        </div>
    );
};

export default ShoppingBag;