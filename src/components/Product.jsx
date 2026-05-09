import { Link } from 'react-router'
import './Product.css'

export function Product({name,loc}){
    return(
        <div className="Product-Container">
            <div className="Image-Container">
                <img src={loc} className="Product-Image" />
            </div>         
            <div className="Product-Name-Container">
                <Link className="Product-Name">{name}</Link>
            </div>             
            <button className="Product-Button">Add To Cart</button>            
        </div>
    );
}