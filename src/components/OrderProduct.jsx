import './OrderProduct.css'

export function OrderProduct({name}){
    return(
        <>
            <div className="order-container">
                {name}
                <div className="cart-img-container">
                    <img className="Cart-img"></img>
                </div>
            </div>
        </>
    );
}