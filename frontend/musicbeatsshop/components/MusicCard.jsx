import React from "react";
import './SearchBar.css'

export default function MusicCard({music}){
    return(
        <div className="music-card"> 
            <img src={music.coverImage}alt= {music.name} className="cover-image"></img>
            {/* <div className="card-info"> */}
                <h3>{music.name}</h3>
                <h4>{music.artist}</h4>
                <p>Rs{music.price}</p>
                <button className="prelisten-btn">Prelisten</button>
                <button className="purchase-btn">Purchase</button>

            {/* </div> */}
        </div>
    )
}