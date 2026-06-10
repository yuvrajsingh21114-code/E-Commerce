import axios from 'axios';
import './Summary.css';
import { useNavigate } from 'react-router';
import {formatmoney} from '../utils/formatmoney'

export function Summary({summary,OrderLoad,setOrderLoad,fetchSummary,fetchCartProducts}){
    const navigate=useNavigate();

    async function PlaceOrder(){
        try{
            setOrderLoad(true);

            const response= await axios.post('http://localhost:5000/api/summary',{
                status: "add order"
            });

            console.log(response.data);
        }
        catch(err){
            console.log(err);
        }
        finally{
            setOrderLoad(false);
            fetchSummary();
            fetchCartProducts();
            navigate('/orders');
        }
    }

    return(
        <div className="SumContainer">
            <div className="subcon">
                <center><b>Summary</b></center><br />
                Price:{formatmoney(summary.total)}<br />
                Total-Items: {summary.totalitems}<br />
                Shipping fees:{formatmoney(summary.shippingcost)}<br />                
                Subtotal:{formatmoney(summary.subtotal)}<br />
                <button className="order-button" disabled={OrderLoad} onClick={PlaceOrder}>{OrderLoad ? "Placing your Order" : "Place Order"}</button>
            </div>
        </div>
    )
}