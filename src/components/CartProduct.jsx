import axios from 'axios';
import './CartProduct.css'
import { formatmoney } from '../utils/formatmoney'

export function CartProduct({ product,fetchSummary,type}) {

    async function ShippingChange(event){
        try{
            const shippingresponce= await axios.put('http://localhost:5000/api/Cart',{
                id: product.id,
                delivery: event.target.value,
            })

            console.log(shippingresponce.data);
        }
        catch(err){
            console.log(err);
        }
        finally{
            fetchSummary();
        }
    }

    return (
        <>
            { type !=0 ?(
                        <div className="SingleProduct" key={product.id}>
                                                        
                            <div className="cart-img-container">
                                <img className="Cart-img" src={product.image}></img>
                            </div>

                            <div className="cart-product-content">
                                <div className="clr">Name:</div> {product.name} <br />
                                <div className="clr">Brand:</div> {product.brand} <br />
                                <div className="clr">Category: </div> {product.category} <br />
                                <div className="clr">Rating:  </div> {product.rating}/5 <br />
                                <div className="clr">Price: </div> {formatmoney(product.price)} <br />
                                <div className="clr">Description: </div> {product.description} <br />
                            </div>
                            
                            <div className="cart-shipping-container">
                                <div className="shipping-heading">Select shipping type: </div> <br />
                                <form className="Shipping-form" name="Shipping-form">
                                    <label><input type="radio" value="3" name="option 1" onChange={ShippingChange} checked={product.delivery===3} />2-day Shipping($100)</label><br />
                                    <label><input type="radio" value="2" name="option 1" onChange={ShippingChange} checked={product.delivery===2} />Fast Shipping($60)</label><br />
                                    <label><input type="radio" value="1" name="option 1" onChange={ShippingChange} checked={product.delivery===1} />Standard shipping($40)</label>
                                </form>
                            </div>

                        </div>
                    ):
                    (<div className="SingleProduct">
                        <div className="cart-product-content">
                            Empty Cart <br />
                            Add any products to proceed
                        </div>
                    </div>)
            } 
        </>       
    )
}