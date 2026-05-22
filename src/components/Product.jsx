import axios from 'axios';
import { Link } from 'react-router'
import './Product.css'

export function Product({name,loc}){

    async function AddCart(){
        try{
            const response= await axios.post('http://localhost:5000/api/product',{
                name: name
            });

            console.log(response.data);
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <div className="Product-Container">
            <div className="Image-Container">
                <img src={loc} className="Product-Image" />
            </div>         
            <div className="Product-Name-Container">
                <Link className="Product-Name">{name}</Link>
            </div>             
            <button className="Product-Button" onClick={AddCart}>Add To Cart</button>            
        </div>
    );
}