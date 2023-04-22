import React from "react";
import './Navbar.css';

export default function Navbar(){
    return(
        <div className="navbar">
            <ul>
                <li><a href="#">My tracks</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Cart</a></li>
            </ul>
        </div>
    )
}