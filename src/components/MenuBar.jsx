import { Link } from 'react-router';
import './MenuBar.css';
import { useState } from 'react';

export function MenuBar() {
    const[show,setShow]=useState(false);
    function focus(value){
        console.log(value);
    }

    return (
        <>
            <div className="MenuBar-Container">
                <Link to="/" className="MenuBar-Text">E-Commerce</Link>
                <div className="SearchBox-Container">
                    <input className="MenuBar-SearchBox" 
                        placeholder="Enter to Search" 
                        onFocus={()=>{setShow('grid')}} 
                        onBlur={()=>{setTimeout(() => {
                            setShow(false)
                        }, 500);}}></input>
                    <div className="Search-menu-box" style={{display:show}}>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("s1")}}><label>Suggestion1</label></div>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("s1")}}><label>Suggestion1</label></div>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("s1")}}><label>Suggestion1</label></div>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("s1")}}><label>Suggestion1</label></div>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("s1")}}><label>Suggestion1</label></div>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("s1")}}><label>Suggestion1</label></div>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("s1")}}><label>Suggestion1</label></div>
                        <div className="Search-menu-suggestion"  onClick={()=>{focus("s1")}}><label>Suggestion1</label></div>
                    </div>
                    <Link className="MenuBar-SearchButton">Search</Link>
                </div>

                <div className="MenuBar-Buttons-Container">
                    <Link className="MenuBar-Buttons" to="/Orders">Orders</Link>
                    <Link className="MenuBar-Buttons" to="/Cart">Cart</Link>
                </div>
            </div>


        </>
    );
}