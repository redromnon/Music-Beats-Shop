import React from "react";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import MusicCard from "./MusicCard";
import track1image from "../src/assets/track1.png"
import track2image from "../src/assets/track2.png"
import track3image from "../src/assets/track4.png"

const musicData = [
    {
      id:"1",
      name:"track1",
      artist:"artist1",
      genre:"pop",
      coverImage:track1image,
      price:"499",
    },
    {
      id:"2",
      name:"track2",
      artist:"artist3 ",
      genre:"rock",
      coverImage:track2image,
      price:"999",
    },
    {
      id:"3",
      name:"track3",
      artist:"artist3",
      genre:"classical",
      coverImage:track3image,
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
