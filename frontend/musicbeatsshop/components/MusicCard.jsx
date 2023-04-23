import React, { useState } from "react";
import './SearchBar.css'
import { Link, useNavigate } from "react-router-dom";
import './Cart';
import axios from 'axios'

// export default function MusicCard({music}){
//     return(
//         <div className="music-card"> 
//             <img src={music.coverImage}alt= {music.name} className="cover-image"></img>
//             {/* <div className="card-info"> */}
//                 <h3 style={{backgroundColor:"transparent"}}>{music.name}</h3>
//                 <h4 style={{backgroundColor:"transparent"}}>{music.artist}</h4>
//                 <p style={{backgroundColor:"transparent"}}>Rs{music.price}</p>
//                 <button className="prelisten-btn">Prelisten</button>
//                 <button className="purchase-btn">Purchase</button>

//             {/* </div> */}
//         </div>
//     )
// }




export default function MusicCard({music, onPurchase}){

    //const [isAddedToCart,setIsAddedToCart]= useState(false);

    const handlePurchase = () =>{
        axios.post('http://127.0.0.1:5000/addtocart',{
            name: music.name,
            price: music.price,
        })
        
        .then((response)=>{
            console.log(response);
            alert(`Added to cart!`)
        })

        .catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })


    }

     return(
         <div className="music-card"> 
             <img src={music.coverImage}alt= {music.name} className="cover-image"></img>
             {/* <div className="card-info"> */}
                 <h3 style={{backgroundColor:"transparent"}}>{music.name}</h3>
                 <h4 style={{backgroundColor:"transparent"}}>{music.artist}</h4>                 <p style={{backgroundColor:"transparent"}}>Rs{music.price}</p>
                 <button className="prelisten-btn">Prelisten</button>
                 {/*<Link to = '/cart'>*/}
                 {/* <button onClick={()=> onPurchase(music)}className="purchase-btn">Purchase</button> */}
                 <button onClick={handlePurchase} className="purchase-btn">Purchase</button>
                 {/*</Link>*/}

             {/* </div> */}
         </div>
     )
 }