import './CartProduct.css'
import {formatmoney} from '../utils/formatmoney'

export function CartProduct({cartProducts}){

    return(
        <div className="ProContainer">
            {
                cartProducts.length > 0 ?(cartProducts.map((product)=>{
                    return(
                        <div className="SingleProduct" key={product.id}>
                            <div className="cart-product-content">
                                Name: {product.name} <br />
                                Brand: {product.brand} <br />
                                Category: {product.category} <br />
                                Rating: {product.rating}/5 <br />
                                Price: {formatmoney(product.price)} <br />
                                Description: {product.description} <br />
                            </div>
                            <div className="cart-img-container">
                                <img className="Cart-img" src={product.image}></img>
                            </div>
                        </div>
                    );
                })) : 
                (<div className="SingleProduct">
                    <div className="cart-product-content">
                        Empty Cart <br/>
                        Add any products to proceed
                    </div>
                </div>)
            }
        </div>
    )
}