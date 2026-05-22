import './CartProduct.css'
import axios from 'axios'
import { useEffect,useState } from 'react'

export function CartProduct(){
    const[cartProducts,setCartProducts]=useState([]);

    useEffect(()=>{
        async function fetchCartProducts(){
            const cartresponse=await axios.get('http://localhost:5000/api/cart');
            setCartProducts(cartresponse.data);
        }

        fetchCartProducts();
    },[]);


    return(
        <div className="ProContainer">
            {
                cartProducts.map((product)=>{
                    return(
                        <div className="SingleProduct" key={product.id}>
                            Name: {product.name} <br />
                            Brand: {product.brand} <br />
                            Price: {product.price} <br />
                            Description: {product.description} <br />
                            <img src={product.image}></img>
                        </div>
                    );
                })
            }
        </div>
    )
}