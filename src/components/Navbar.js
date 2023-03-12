// import React, { useState } from 'react';
// import {  } from "props";
import {Link} from "react-router-dom";

export default function Navbar(props) {

    return (
        <div className={`navbar navbar-${props.mode}`}>
            <div>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/Utility-Available">UTILITIES AVAILABLE</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </div>
            <div id="switch">
                <label className="switch-input-label" htmlFor="switch-input">
                    <input type="checkbox" id="switch-input" className='switch-input' onClick ={props.toggle} defaultChecked/>
                    <span className='slider'></span> 
                    <p>enable {props.modeText} mode</p>
                </label>
            </div>
        </div>
    )
}
