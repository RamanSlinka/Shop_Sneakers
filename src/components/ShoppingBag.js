import React, {useContext, useState} from 'react';
import removeBtn from "../common/button-delete.jpg";
import arrow from "../common/arrow.png";
import emptyCart from "./../common/shopping-cart.jpg"
import orderComplete from "./../common/order-processing.jpg"
import Info from "./Info";
import {AppContext} from "../App";
import axios from "axios";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const ShoppingBag = ({onClose, items = [], onRemove}) => {
    const {setCartItems, cartItems} = useContext(AppContext);
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [orderId, setOrderId] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios
                .post("https://6138c162163b56001703a0b6.mockapi.io/orders",
                    {items: cartItems});

            setOrderId(data.id)
            setIsOrderComplete(true)
            setCartItems([]);

            for (let i = 0; i < Array.length; i++) {
                const item = cartItems[i];
                await axios.delete("https://6138c162163b56001703a0b6.mockapi.io/cart/" + item.id)
                await delay(1000);
            }
        } catch (error) {
            alert('Order was not created')
        }
        setIsLoading(false)
    }

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
                    <div className="d-flex flex-column flex">
                        <div className="items">
                            {items.map((obj, index) => (
                                <div key={index} className="cartItem d-flex align-center mb-20">

                                    <img src={obj.imageUrl} alt="sneakers" width={70} height={70} className='mr-20'/>
                                    <div className='mr-20 flex'>
                                        <p className='mb-5'>{obj.title}</p>
                                        <b>{obj.price}$</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(obj.id)}
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
                            <button className='greenBtn'
                                    onClick={onClickOrder}
                                    disabled={isLoading}
                            >Place an order
                                <img src={arrow} alt='arrow' width={20} className='arrow'/>
                            </button>
                        </div>
                    </div>
                    :
                    <Info title={isOrderComplete ? "Order completed" : "Empty cart"}
                          description={isOrderComplete
                              ? `The order № ${orderId} will be transferred by courier delivery`
                              : "Add at least 1 pair of sneakers to order"}
                          image={isOrderComplete ? orderComplete : emptyCart}
                    />
                }


            </div>
        </div>
    );
};

export default ShoppingBag;