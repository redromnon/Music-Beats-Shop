import React from "react";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import MusicCard from "./MusicCard";

const musicData = [
    {
      id:"1",
      name:"track1",
      artist:"artist1",
      genre:"pop",
      coverImage:"https://via.placeholder.com/150",
      price:"499",
    },
    {
      id:"2",
      name:"track2",
      artist:"artist3 ",
      genre:"rock",
      coverImage:"https://via.placeholder.com/150",
      price:"999",
    },
    {
      id:"3",
      name:"track3",
      artist:"artist3",
      genre:"classical",
      coverImage:"https://via.placeholder.com/150",
      price:"2999",
    },
    //more entries
  ];
  
export default function Home(){
    return(
        <>
            <Navbar/>
            <SearchBar musicData = {musicData}/>
            {/* <MusicCard/> */}
        </>
    )
    
}
