import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider/Slider';
import { fetchMovies, getGenres } from '../store/Slice/movie-slice';
import '../assets/styles/Movies.scss'

const Movies = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const genresLoaded = useSelector(state => state.movie.genresLoaded)
    const movies = useSelector(state => state.movie.movies)
    const status = useSelector(state => state.movie.status)
    const [isScrolling, setIsScrolling] = useState(false)
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 60))
  
    useEffect(() => {
      if(status === 'idle'){
        dispatch(getGenres())
      }
    },[dispatch,status])
  
  
    useEffect(() => {
      if(genresLoaded){
        dispatch(fetchMovies({type : "all"}))
      }
    },[dispatch,genresLoaded])
  
    window.onscroll = () => {
      setIsScrolling(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    }
  
  return (
    <div>
      {status === 'pending' && <Loader/>}
      <Navbar isScrolled={isScrolling} ></Navbar>
      {movies.length > 0 &&
        <div className='moviesPage'>
            <Slider movies={movies} ></Slider>
        </div>
      }

    </div>
  )
}

export default Movies