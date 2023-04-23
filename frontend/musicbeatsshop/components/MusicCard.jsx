import React from "react";
import './SearchBar.css'
import { Link } from "react-router-dom";
import './Cart';

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
     return(
         <div className="music-card"> 
             <img src={music.coverImage}alt= {music.name} className="cover-image"></img>
             {/* <div className="card-info"> */}
                 <h3 style={{backgroundColor:"transparent"}}>{music.name}</h3>
                 <h4 style={{backgroundColor:"transparent"}}>{music.artist}</h4>                 <p style={{backgroundColor:"transparent"}}>Rs{music.price}</p>
                 <button className="prelisten-btn">Prelisten</button>
                 <Link to = '/cart'>
                 {/* <button onClick={()=> onPurchase(music)}className="purchase-btn">Purchase</button> */}
                 <button onClick={onPurchase}className="purchase-btn">Purchase</button>
                 </Link>

             {/* </div> */}
         </div>
     )
 }