import './CartProduct.css'
import speaker from '../assets/speaker.png'
import axios from 'axios'
import { useEffect,useState } from 'react'

export function CartProduct(){
    const[cartProduct,setCartProduct]=useState([]);

    useEffect(()=>{
        async function fetchCartProducts(){
            const cartresponse=await axios.get('http://localhost:5000/api/cart');
            setCartProduct(cartresponse.data);
        }

        fetchCartProducts();
    },[]);


    return(
        <div className="ProContainer">
            {
                cartProduct.map((products)=>{
                    return(
                        <div className="SingleProduct" key={products.id}>
                            {products.name}
                            {products.price}
                        </div>
                    );
                })
            }
            <div className="SingleProduct">
                Products
                <img src={speaker}></img>
            </div>
            <div className="SingleProduct">
                Products
                <img src={speaker}></img>
            </div>
            <div className="SingleProduct">
                Products
                <img src={speaker}></img>
            </div>
            <div className="SingleProduct">
                Products
                <img src={speaker}></img>
            </div>
            <div className="SingleProduct">
                Products
                <img src={speaker}></img>
            </div>
        </div>
    )
}