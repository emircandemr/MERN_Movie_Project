import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import {FaPowerOff, FaSearch} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesWithGenre } from '../../store/Slice/movie-slice'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = ({isScrolled,genre='movie',isGenresActive=false}) => {

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
    const dipatch = useDispatch()
    const [showSearch, setShowSearch] = useState(false)
    const [inputHover,setInputHover] = useState(false)
    const genres = useSelector(state => state.movie.genres)
    const [isMenuActive,setIsMenuActive] = useState(false)

    const onBlurHandler = () => {
        if(!inputHover){
            setShowSearch(false)
        }
    }

    const getMoviesWithGenre = (genreId) => {
        dipatch(fetchMoviesWithGenre({type : genre ,genre : genreId}))
    }

    const handleMenu = () => {
        setIsMenuActive(!isMenuActive)
    }




  return (
        <nav className={`${isScrolled ? 'scrolled' : ''} navbar`}>
            <div className='navbar__desktop'>
                <div className='navbar__content'>
                    <div className='navbar__content--logo'>
                            <h1>MovieDB</h1>
                    </div>
                    <ul className='navbar__content--links'>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path} >{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                    {isGenresActive && 
                    <select 
                    onChange={(e) => getMoviesWithGenre(e.target.value)}
                    className='navbar__content--genres'>
                        {genres.map((genre,index) => (
                        <option key={index} value={genre.id}>{genre.name}</option>
                    ))}
                    </select>
                    }
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
            </div>
            <div className='navbar__mobile'>
                <div className='navbar__mobile--logo'
                onClick={handleMenu}>
                    {isMenuActive ? <AiOutlineClose /> : <GiHamburgerMenu />}
                    {/* <GiHamburgerMenu /> */}
                </div>
                {/* <div className='navbar__mobile--links'>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path} >{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='navbar__mobile--footer'>
                    <div className={`${showSearch ? 'show-search' : ''} navbar__mobile--footer-search `}>
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
                    <button className='navbar__mobile--footer-logout'>
                        <FaPowerOff />
                    </button>
                </div> */}
            </div>
        
        </nav>
  )
}

export default Navbar