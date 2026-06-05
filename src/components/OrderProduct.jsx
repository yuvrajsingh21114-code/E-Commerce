import './OrderProduct.css'

export function OrderProduct({name,loc}){
    return(
        <>
            <div className="order-container">
                {name}
                <div className="order-img-container">
                    <img className="order-img" src={loc}></img>
                </div>
            </div>
        </>
    );
}