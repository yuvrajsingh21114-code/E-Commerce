import { Link } from 'react-router';
import './MenuBar.css';

export function MenuBar(){
    return(
        <div className="MenuBar-Container">           
            <Link to="/" className="MenuBar-Text">E-Commerce</Link>
            <div className="SearchBox-Container">
                <input className="MenuBar-SearchBox" placeholder="Enter to Search"></input>
                <Link className="MenuBar-Buttons">Search</Link>
            </div>
            
            <div className="MenuBar-Buttons-Container">
                <Link className="MenuBar-Buttons" to="/Orders">Orders</Link>
                <Link className="MenuBar-Buttons" to="/Cart">Cart</Link>
            </div>
        </div>
    );    
}