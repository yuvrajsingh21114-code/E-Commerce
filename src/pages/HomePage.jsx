import axios from 'axios'
import { useState,useEffect } from 'react'
import { MenuBar } from '../components/MenuBar'
import { Product } from '../components/Product'
import './HomePage.css'

export function HomePage() {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        async function fetchProducts(){
            try{
                const response=await axios.get('http://localhost:5000/products');
                setProducts(response.data);
            }
            catch(error){
                console.log(error);
            }
        }

        fetchProducts();
    },[]);

    return(
        <>  
            <MenuBar />
            
            <div className="Products-Container">
                {products.map((product)=>{
                    return(
                    <Product name={product.name} />
                    )
                })}
            </div>            
        </>        
    );

}