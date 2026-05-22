import axios from 'axios';
import { useState,useEffect } from 'react';
import './Summary.css';


export function Summary(){
    const [summary,setSummary]=useState([]);
    
    useEffect(()=>{
        async function fetchsummary(){
        const response=await axios.get('http://localhost:5000/api/summary');
        setSummary(response.data);
        }

        fetchsummary();
    },[]);

    return(
        <div className="SumContainer">
            Summary
            price:{summary.total}<br />
            shipping fees:{summary.shippingcost}<br />
            items:{summary.totalitems}<br />
            subtotal:{summary.subtotal}<br />
            <button className="order-button">Place Order</button>
        </div>
    )
}