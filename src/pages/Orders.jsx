import axios from 'axios';
import { useState, useEffect } from 'react';
import { MenuBar } from '../components/MenuBar'
import { OrderProduct } from '../components/OrderProduct'
import './Orders.css'

export function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            try {
                const orderResponse = await axios.get('http://localhost:5000/api/orders');
                setOrders(orderResponse.data);
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchOrders();
        
    }, []);

return (
    <>
        <MenuBar />
        <div className="Orders-container">
            {orders.map((order) => {
                return (
                    <OrderProduct orders={order} key={crypto.randomUUID()} />
                )
            })} 
        </div>
    </>
);

}