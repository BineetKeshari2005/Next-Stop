import { useState } from 'react'
import {Routes, Route, Router} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import ExploreCategories from './components/ExploreCategories';
import Blog from './pages/Blog';



function App() {
  return (
    
    <>
    <Navbar/>
    <Routes>
  
    <Route path="/" index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/explore" element={<Explore/>} />
    <Route path='/blog' element = {<Blog/>} />
    </Routes>
    </>
    


  )
}
export default App;
