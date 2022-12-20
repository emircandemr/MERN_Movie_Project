import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import {FaPowerOff, FaSearch} from 'react-icons/fa'

const Navbar = ({isScrolled}) => {

    const links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name : 'TV Shows',
            path: '/tv-shows'
        },
        {
            name : 'Movies',
            path: '/movies'
        },
        {
            name : 'New & Popular',
            path: '/new-popular'
        },
        {
            name : 'My List',
            path: '/my-list'
        }
    ]

    const [showSearch, setShowSearch] = useState(false)
    const [inputHover,setInputHover] = useState(false)

    const onBlurHandler = () => {
        if(!inputHover){
            setShowSearch(false)
        }
    }

  return (
        <nav className={`${isScrolled ? 'scrolled' : ''} navbar`} >
            <div className='navbar__content'>
                <div className='navbar__content--logo'>
                        <h1>MovieDB</h1>
                </div>
                <ul className='navbar__content--links'>
                    {links.map((link, index) => (
                        <li key={link}>
                            <Link to={link.path} >{link.name}</Link>
                        </li>
                    ))}
                    </ul>
            </div>
            <div className='navbar__footer'>
                 <div className={`${showSearch ? 'show-search' : ''} navbar__footer--search `}>
                    <button onFocus={() => setShowSearch(true)} onBlur={onBlurHandler} >
                        <FaSearch />
                    </button>
                    <input type='text' placeholder='Search'
                    onMouseEnter={() => setInputHover(true)}
                    onMouseLeave={() => setInputHover(false)}
                    onBlur={() => {
                        setInputHover(false)
                        onBlurHandler()
                    }} />
                </div>   
                <button className='navbar__footer--logout'>
                    <FaPowerOff />
                </button> 
            </div>
        </nav>
  )
}

export default Navbar