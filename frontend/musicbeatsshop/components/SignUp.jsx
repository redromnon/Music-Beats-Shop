import React, { useState } from "react";
import './SignIn.css';
import { Outlet,Link } from 'react-router-dom';
import axios from "axios";
import SignIn from "./SignIn";
export default function SignUp(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function HandleSignUp(){
        //alert(`${username} ${password}`)
        //console.log(`${username} ${password}`)
        axios.post(`http://127.0.0.1:5000/signup`, {
            username: username,
            password: password,
          })
          .then((response) => {
            console.log(response)
            alert("Successfully created an account!")
          }).catch((error) => {
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
              }
          })
    }

    return(
    <>
        <div className="container">
		<h2>Sign Up</h2>
		
			<div className="form-group">
				<input 
                type="text" 
                id="username" 
                placeholder="Enter Username"
                onChange={ (e)=> setUsername(e.target.value)}
            />
			</div>
			<div className="form-group">
                <input 
                type="password" 
                id="password" 
                placeholder="Enter Password"
                onChange={(e)=> setPassword(e.target.value)}
            /> 
            </div>   
            <div className="button-align">           
			    <button onClick={HandleSignUp} type="submit" className="btn btn-primary">Sign Up</button>
            </div>
            <Link to='/' style={{color:'grey'}}>Already have an account?</Link>
        
	    </div>
    </>
    )
}
