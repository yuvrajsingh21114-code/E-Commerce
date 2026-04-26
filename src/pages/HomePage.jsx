import { MenuBar } from '../components/MenuBar'
import { Product } from '../components/Product'
import './HomePage.css'
import img1 from '../assets/speaker.png'

export function HomePage() {

    return(
        <>
            <MenuBar />
            <div className="Products-Container">
                <Product name="Speaker" loc={img1} />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            
        </>        
    );

}