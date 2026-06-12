import './OrderProduct.css'
import { formatmoney } from '../utils/formatmoney'

export function OrderProduct({ orders }) {
    return (
        <>
            <div className="order-container">
                Name: {orders.name} <br />
                Brand: {orders.brand} <br />
                Category: {orders.category} <br />
                Rating: {orders.rating}/5 <br />
                Price: {formatmoney(orders.price)} <br />
                Description: {orders.description} <br />
                <div className="order-img-container">
                    <img className="order-img" src={orders.image}></img>
                </div>
            </div>
        </>
    );
}