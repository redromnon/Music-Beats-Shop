import React from "react";
import { Outlet,Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <ul>
                    <li><a href="#">My tracks</a></li>
                    <li><a href="#">Profile</a></li>
                    <Link to="/cart">Cart</Link>
                </ul>
            </div>
            <Outlet/>
        </>
    )
}