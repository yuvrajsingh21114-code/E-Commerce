import './OrderProduct.css'
import { formatmoney } from '../utils/formatmoney'

export function OrderProduct({ orders }) {
    const date=new Date();
    const deliverydate= ()=>{
        if(orders.delivery==1){
            return 10;
        }
        else if(orders.delivery==2){
            return 6;
        }
        else if(orders.delivery==3){
            return 2;
        }
    }
    date.setDate(date.getDate()+ deliverydate());

    return (
        <>
            <div className="order-container">
                <div className="order-img-container">
                    <img className="order-img" src={orders.image}></img>
                </div>

                <div className="order-container-content">
                    <div className="clr2">Name: </div> {orders.name} <br />
                    <div className="clr2">Brand: </div> {orders.brand} <br />
                    <div className="clr2">Category: </div> {orders.category} <br />
                    <div className="clr2">Rating: </div> {orders.rating}/5 <br />
                    <div className="clr2">Price: </div> {formatmoney(orders.price)} <br />
                    <div className="clr2">Description: </div> {orders.description} <br />
                </div>
                
                <div className="Arriving-on">
                    <div className="clr3">
                        Arriving on: 
                        <div className="shipping-date">
                            {date.toLocaleDateString('en-IN')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}