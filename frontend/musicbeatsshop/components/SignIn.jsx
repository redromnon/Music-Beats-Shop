import React from "react";

export default function SignIn(){
    return(
    <>
        <div className="container">
		<h2>Sign In!</h2>
		
			<div className="form-group">
				<label className="username">Username:</label>
				<input type="text"  id="username" placeholder="Enter username"/>
			</div>
			<div className="form-group">
                <label className="password">Password:</label>
                <input type="password" id="password" placeholder="Enter password"/>
                
            </div>   
            <div className="button-align">           
			    <button type="submit" className="btn btn-primary">SignIn</button>
            </div>
            <div className="button-align">
                <a href="login.html">Don't have an Account?</a>
            </div>
        
	    </div>
    </>
    )
}
