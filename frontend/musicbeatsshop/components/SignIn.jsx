import React from "react";
import './SignIn.css';
import { Outlet,Link } from 'react-router-dom';

export default function SignIn(){
    return(
    <>
        <div className="container">
		<h2>Login</h2>
		
			<div className="form-group">
				<input type="text" id="username" placeholder="Enter Username"/>
			</div>
			<div className="form-group">
                <input type="password" id="password" placeholder="Enter Password"/> 
            </div>   
            <div className="button-align">           
			    <button type="submit" className="btn btn-primary">Sign In</button>
            </div>
            <Link style={{color:'grey'}}>Don't have an Account?</Link>
        
	    </div>
    </>
    )
}
