import React from 'react';
import removeBtn from "../common/button-delete.jpg";
import arrow from "../common/arrow.png";

const ShoppingBag = ({onClose, items = []}) => {
    return (
        <div className='overlay'>
            <div className="drawer">
                <h2 className='mb-30 d-flex justify-between'>Shopping Bag
                    <img src={removeBtn} alt="Remove"
                         width={30} className='removeBtn cu-p'
                         onClick={onClose}
                    />
                </h2>

                <div className="items">

                    {items.map((obj, index) => (

                    <div key={index} className="cartItem d-flex align-center mb-20">
                        <img src={obj.imageUrl} alt="sneakers" width={70} height={70} className='mr-20'/>
                        <div className='mr-20 flex'>
                            <p className='mb-5'>{obj.title}</p>
                            <b>{obj.price}$</b>
                        </div>
                        <img
                            src={removeBtn} alt="Remove" width={30} className='removeBtn'/>
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
        </div>
    );
};

export default ShoppingBag;