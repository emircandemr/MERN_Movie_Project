import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import {FaPowerOff, FaSearch} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesWithGenre } from '../../store/Slice/movie-slice'
import {signOutFromFirebase } from '../../services/authService'
import { logoutReducer } from '../../store/Slice/auth-slice'
import toast from 'react-hot-toast'
import SearchMovie from '../SearchMovie/SearchMovie'

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
    const dispatch = useDispatch()
    const genres = useSelector(state => state.movie.genres)
    const [isMenuActive,setIsMenuActive] = useState(false)
    const [searchedInput,setSearchedInput] = useState('')
    const [showSearchResult,setShowSearchResult] = useState(false)

    const getMoviesWithGenre = (genreId) => {
        dispatch(fetchMoviesWithGenre({type : genre ,genre : genreId}))
    }

    const logOutHandler = () => {
        dispatch(logoutReducer())
        signOutFromFirebase()
        toast('Logged Out Successfully',
        {
            icon: '👻',
            style: {
            background: '#333',
            color: '#fff',
            },
        }
        );
    }

    const searchMovieHandler = (e) => {
        setShowSearchResult(true)
        setSearchedInput(e.target.value)
    }

  return (
        <nav className={`${isScrolled ? 'scrolled' : ''} navbar ${isMenuActive ? 'active' : ''} `}
        onMouseEnter={() => setIsMenuActive(true)}
        onMouseLeave={() => setIsMenuActive(false)}
        >
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
                    <div className='navbar__footer--container' >
                    <div className={`navbar__footer--search `}>
                        <FaSearch />
                    <input type='text' placeholder='Search for a movie, tv show, person...'
                    onChange={(e) => searchMovieHandler(e)}/>
                    </div>
                    {showSearchResult && 
                    <SearchMovie
                    showSearchResult={showSearchResult}
                     setShowSearchResult={setShowSearchResult} searchedInput={searchedInput} >
                    </SearchMovie>}
                    </div>
                <button className='navbar__footer--logout'
                onClick={logOutHandler}>
                    <FaPowerOff />
                </button> 
                </div>
            </div>
        
        </nav>
  )
}

export default Navbar