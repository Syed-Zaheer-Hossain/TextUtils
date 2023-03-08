// import React, { useState } from 'react';
// import {  } from "props";

export default function Navbar(props) {

    return (
        <div className={`navbar navbar-${props.mode}`}>
            <div>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>UTILITIES AVAILABLE</li>
                    <li>CONTACT</li>
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
