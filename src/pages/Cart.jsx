import { MenuBar } from '../components/MenuBar';
import { CartProduct } from '../components/CartProduct';
import { Summary } from '../components/Summary';
import axios from 'axios'
import { useEffect, useState } from 'react'
import './Cart.css';

export function Cart() {
    const [cartProducts, setCartProducts] = useState([]);
    const [summary, setSummary] = useState([]);
    const [OrderLoad, setOrderLoad] = useState(false);

    const fetchCartProducts = async () => {
        const cartresponse = await axios.get('http://localhost:5000/api/cart');
        setCartProducts(cartresponse.data);
    }


    useEffect(() => {
        fetchCartProducts();
    }, []);

    const fetchSummary = async () => {
        const response = await axios.get('http://localhost:5000/api/summary');
        setSummary(response.data);

        if (response.data.total == 0) {
            setOrderLoad(true);
        }
    }

    useEffect(() => {
        fetchSummary();
    }, []);

    return (
        <>
            <MenuBar />
            <div className="Orders-Container" >
                <div className="ProContainer">
                    {
                        cartProducts.length > 0 ? (cartProducts.map((product) => {
                            return(
                                <CartProduct key={product.id} product={product} fetchSummary={fetchSummary} type="1" fetchCartProducts={fetchCartProducts} />
                            );
                        })): <CartProduct type="0"/>
                    }
                </div>
                
                <Summary orderLoar={OrderLoad} summary={summary} setOrderLoad={setOrderLoad} fetchSummary={fetchSummary} fetchCartProducts={fetchCartProducts} />
            </div>
        </>
    );
}