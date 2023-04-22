import React from "react";
import { Outlet,Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <ul>
                    <li><Link to="/tracks">My tracks</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
            <Outlet/>
        </>
    )
}