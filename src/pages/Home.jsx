import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar';

const Home = () => {

  const [isScrolling, setIsScrolling] = useState(false)

  window.onscroll = () => {
    setIsScrolling(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }

  return (
    <div>
      <Navbar isScrolled={isScrolling} ></Navbar>
    </div>
  )
}

export default Home