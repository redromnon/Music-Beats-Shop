import React from 'react';
import { BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import './App.css'
import SearchBar from '../components/SearchBar'
import MusicCard from '../components/MusicCard'
import Cart from '../components/Cart'






function App() {
  

  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <SearchBar musicData = {musicData}/> */}
      <BrowserRouter>     
        <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>

      
      {/* <MusicCard/>
       */}



      {/* <h1>Let's do this Sid!</h1> */}

    </div>
  )
}

export default App;
