import React, { useState } from "react";
import MusicCard from "./MusicCard";
import './SearchBar.css';

const SearchBar = ({musicData,onPurchase})=>{
    const [searchQuery,setSearchQuery] = useState('');
    const [searchResults, setSearchResults]= useState(musicData);


//handle search
const handleSearch=()=>{
     const filteredMusicData = musicData.filter((music)=>{
         const query = searchQuery.toLowerCase();
         return(
             music.name.toLowerCase().includes(query)||
             music.artist.toLowerCase().includes(query)||
             music.genre.toLowerCase().includes(query)
         );
     })
     setSearchResults(filteredMusicData);
    console.log("search music here "+searchQuery);
}

//update searchquery on input change

const handleInputChange = (event)=>{
    setSearchQuery(event.target.value)
};


    return(
        <div className="search-container">
            <input
                type = "text"
                placeholder="Search for tracks/genere/artist"
                value = {searchQuery}
                onChange = {handleInputChange}
                className="search-input"
            />
            <button onClick={handleSearch} className="search-btn">Search</button> 
             <div className="music-cards-container">
                {searchResults.map((music)=>(
                    <MusicCard key={music.id} music={music} onPurchase={()=>onPurchase(music)}/>
                    
                ))}
            </div> 
        </div>
    );
};

export default SearchBar;