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
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';







function App() {
  

  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <SearchBar musicData = {musicData}/> */}
      <BrowserRouter>     
        <Routes>
              <Route path="/" element={<SignIn/>} />
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
