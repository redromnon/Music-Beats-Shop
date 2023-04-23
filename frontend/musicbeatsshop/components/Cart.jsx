import React from "react";
import { Link } from "react-router-dom";
import './Cart.css'


export default function Cart ({cartItem}){
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
                    <th>Product</th>
                    <th>Price</th>
                    
                </tr>
            </thead>

                <tbody>
                    <tr>
                        <td><img src= {cartItem.coverImage}className="cart-product-image" /></td>
                        <td>{cartItem.name}</td>
                        <td>{cartItem.price}</td>
                    </tr>
                </tbody>
            </table>
            <div className="cart-total">
                <h3>Total: {cartItem.price}</h3>
            </div>
            
            <div>
                <img src={cartItem.image} alt={cartItem.title} />
                <p>{cartItem.title} - {cartItem.artist} - \${cartItem.price}</p>
            </div>
            <p>Total Price : Rs{cartItem.price}</p>
            {/* <Link to= '/payments'>
                <button>Go to payments</button>
            </Link> */}

             <button className="checkout-button">Checkout</button>
        </div>
    )
}