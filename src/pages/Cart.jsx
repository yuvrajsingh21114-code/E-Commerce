import { MenuBar } from '../components/MenuBar';
import { CartProduct } from '../components/CartProduct';
import { Summary } from '../components/Summary';
import './Cart.css';

export function Cart() {
    return(
        <>
            <MenuBar />
            <div className="Orders-Container">           
                <CartProduct />
                <Summary />
            </div>
            
        </>
    );
}