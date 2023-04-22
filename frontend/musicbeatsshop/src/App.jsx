import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar'
import './App.css'
import SearchBar from '../components/SearchBar'
import MusicCard from '../components/MusicCard'


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
    name:"track3",
    artist:"artist3 ",
    genre:"rock",
    coverImage:"https://via.placeholder.com/150",
    price:"999",
  },
  {
    id:"3",
    name:"track4",
    artist:"artist3",
    genre:"classical",
    coverImage:"https://via.placeholder.com/150",
    price:"2999",
  },
  //more entries
];




function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <SearchBar musicData = {musicData}/>
      {/* <MusicCard/>
       */}



      {/* <h1>Let's do this Sid!</h1> */}

    </div>
  )
}

export default App;
