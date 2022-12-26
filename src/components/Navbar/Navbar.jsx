import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import {FaPowerOff, FaSearch} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesWithGenre } from '../../store/Slice/movie-slice'

const Navbar = ({isScrolled,isGenresActive=false}) => {

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

    const onBlurHandler = () => {
        if(!inputHover){
            setShowSearch(false)
        }
    }

    const getMoviesWithGenre = (genreId) => {
        dipatch(fetchMoviesWithGenre({type : 'movie',genre : genreId}))
    }

  return (
        <nav className={`${isScrolled ? 'scrolled' : ''} navbar`} >
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
        </nav>
  )
}

export default Navbar