import React, {useContext, useEffect, useState} from 'react';
import Card from "../components/Card/Card";
import axios from "axios";
import {AppContext} from "../App";


const Orders = () => {
    const {onAddToFavorite, onAddToCart} = useContext(AppContext);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
        try {
            setIsLoading(true)
            const {data} = await axios.get("https://6138c162163b56001703a0b6.mockapi.io/orders");
            setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
            setIsLoading(false)
        }catch (error) {
            alert('Sorry, ERROR')
        }
        }

        fetchData();
    }, [])

    return (
        <div className="content p-40">
            <div className='d-flex align-center mb-40 justify-between'>
                <h1>History of popular products</h1>
            </div>
            <div  className='d-flex flex-wrap ' >

                {(isLoading ? [...Array(16)] : orders).map((item, index) => (
                    <Card
                        key={index}
                        isLoading={isLoading}
                        {...item}
                    />
                ))}

            </div>


        </div>);
};

export default Orders;