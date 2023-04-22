import React from "react";

export default function SignUp (){
    return(
    <>
        <div className="container">
		<h2>Create Account</h2>
		
			<div className="form-group">
				<label className="username">Username:</label>
				<input type="text"  id="username" placeholder="Enter username"/>
			</div>
			<div className="form-group">
                <label className="password">Password:</label>
                <input type="password" id="password" placeholder="Enter password"/>
                
            </div>   
            <div className="button-align">           
			    <button type="submit" className="btn btn-primary">Signup</button>
            </div>
            <div className="button-align">
                <a href="login.html">Already have an Account?</a>
            </div>
        
	    </div>
    </>
    )
}
