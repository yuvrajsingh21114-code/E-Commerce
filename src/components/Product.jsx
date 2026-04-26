import { Link } from 'react-router'
import './Product.css'

export function Product({name,loc}){
    return(
        <div className="Product-Container">
            <Link className="Product-Name">{name}</Link>
            <img src={loc} className="Product-Image" />
            <button className="Product-Button">Add To Cart</button>            
        </div>
    );
}