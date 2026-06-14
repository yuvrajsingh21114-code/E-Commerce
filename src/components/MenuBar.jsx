import { Link } from 'react-router';
import './MenuBar.css';
import { useState } from 'react';

export function MenuBar() {
    const[show,setShow]=useState(false);
    const[suggestion,setSuggestion]=useState('');
    function focus(value){
        setSuggestion(value);
    }

    return (
        <>
            <div className="MenuBar-Container">
                <Link to="/" className="MenuBar-Text">E-Commerce</Link>
                <div className="SearchBox-Container">
                    <input className="MenuBar-SearchBox" 
                        value={suggestion}
                        placeholder="Enter to Search" 
                        onChange={()=>{console.log('');}}
                        onFocus={()=>{setShow('grid')}} 
                        onBlur={()=>{setTimeout(() => {
                            setShow(false)
                        }, 300);}}></input>
                    <div className="Search-menu-box" style={{display:show}}>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("Shoes")}}><label>Shoes</label></div>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("TV")}}><label>TV</label></div>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("Speaker")}}><label>Speaker</label></div>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("bag")}}><label>bag</label></div>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("Coffee")}}><label>Coffee</label></div>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("Pen")}}><label>Pen</label></div>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("Phone")}}><label>Phone</label></div>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("Chair")}}><label>Chair</label></div>
                    </div>
                    <Link to="/" className="MenuBar-SearchButton" onClick={()=>{setSuggestion('')}}>Search</Link>
                </div>

                <div className="MenuBar-Buttons-Container">
                    <Link className="MenuBar-Buttons" to="/Orders">Orders</Link>
                    <Link className="MenuBar-Buttons" to="/Cart">Cart</Link>
                </div>
            </div>


        </>
    );
}