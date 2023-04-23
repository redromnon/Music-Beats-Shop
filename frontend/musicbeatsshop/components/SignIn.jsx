import React, {useState} from "react";
import './SignIn.css';
import { Outlet,Link } from 'react-router-dom';
import axios from "axios";

export default function SignIn(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function HandleLogIn(){
        //alert(`${username} ${password}`)
        //console.log(`${username} ${password}`)
        axios.post(`http://127.0.0.1:5000/login`, {
            username: username,
            password: password,
          })
          .then((response) => {
            console.log(response)
            alert("Successfully logged in!")
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
		<h2>Login</h2>
		
			<div className="form-group">
				<input 
                    type="text" 
                    value={username}
                    id="username" 
                    placeholder="Enter Username"
                    onChange={ (e)=> setUsername(e.target.value)}
                />
			</div>
			<div className="form-group">
                <input 
                    type="password"
                    id="password" 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Enter Password"/> 
            </div>   
            <div className="button-align">           
			    <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={HandleLogIn}
                >
                Sign In
                </button>
            </div>
            <Link style={{color:'grey'}}>Don't have an Account?</Link>
        
	    </div>
    </>
    )
}
