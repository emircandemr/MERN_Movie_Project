import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider/Slider';
import { fetchMovies, getGenres } from '../store/Slice/movie-slice';
import '../assets/styles/Movies.scss'
import NotFound from '../components/NotFound/NotFound';

const Movies = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const genresLoaded = useSelector(state => state.movie.genresLoaded)
    const movies = useSelector(state => state.movie.movies)
    const status = useSelector(state => state.movie.status)
    const [isScrolling, setIsScrolling] = useState(false)
  
    useEffect(() => {
      if(status === 'idle'){
        dispatch(getGenres())
      }
    },[dispatch,status])
  
  
    useEffect(() => {
      if(genresLoaded){
        dispatch(fetchMovies({type : "movie"}))
      }
    },[dispatch,genresLoaded])
  
    window.onscroll = () => {
      setIsScrolling(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    }
  
  return (
    <div>
      {status === 'pending' && <Loader/>}
      <Navbar isScrolled={isScrolling} isGenresActive={true} ></Navbar>
      {movies.length > 0 &&
        <div className='moviesPage'>
            <Slider movies={movies} ></Slider>
        </div>
      }
       {movies.length === 0 && 
        <NotFound></NotFound>
      }


    </div>
  )
}

export default Movies