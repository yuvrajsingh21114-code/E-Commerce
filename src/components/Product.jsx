import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router'
import './Product.css'
import {formatmoney} from '../utils/formatmoney'

export function Product({name,loc,id,description,cost}){
    const [loading,setLoading]= useState(false);

    async function AddCart(){
        try{
            setLoading(true);

            const response= await axios.post('http://localhost:5000/api/product',{
                id: id
            });
            console.log(response.data);
        }
        catch(err){
            if (err.response?.status===409){
                alert('Item already inside cart');
            }
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    }

    return(
        <div className="Product-Container">
            <div className="Image-Container">
                <img src={loc} className="Product-Image" />
            </div>         
            <div className="Product-Name-Container">
                <Link className="Product-Name">{name}</Link><br/>
                <p>{description}</p><br />
                <center>Price: {formatmoney(cost)}</center>
            </div>             
            <button className="Product-Button" disabled={loading} onClick={AddCart}>{loading ? "Adding..." : "Add to Cart"}</button>            
        </div>
    );
}