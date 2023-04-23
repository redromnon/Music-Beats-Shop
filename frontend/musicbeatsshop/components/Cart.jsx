import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './Cart.css'
import axios from "axios";


export default function Cart ({cartItem}){

    const [music_name, setMusicName] = useState("")
    const [music_price, setMusicPrice] = useState("")

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/cart`)
          .then((response) => {
            console.log(response)

            const data = response.data
            setMusicName(data.name)
            setMusicPrice(data.price)

          }).catch((error) => {
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
              }
          })
    })


    if(!cartItem){
        return <p> No item in cart.</p>;
    }

    return(
        <div className="cart-container">
            <h1 className="cart-title">My Cart</h1>
            <table className="cart-table">
            <thead>
                <tr>
                    <th>cover</th>
                    <th>Price</th>
                    
                </tr>
            </thead>

                <tbody>
                    <tr>
                        <td>{music_name}</td>
                        <td>{music_price}</td>
                    </tr>
                </tbody>
            </table>
            <div className="cart-total">
                <h3>Total: {music_name}</h3>
            </div>
            
            <div>
                <p>{music_name} - \${music_price}</p>
            </div>
            <p>Total Price : Rs{music_price}</p>
            {/* <Link to= '/payments'>
                <button>Go to payments</button>
            </Link> */}

             <button className="checkout-button">Checkout</button>
        </div>
    )
}