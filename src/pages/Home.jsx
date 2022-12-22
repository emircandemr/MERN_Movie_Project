import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import poster from '../assets/img/poster.jpg'
import banner from '../assets/img/banner.png'
import '../assets/styles/Home.scss'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store/Slice/movie-slice';
import Slider from '../components/Slider/Slider';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const genresLoaded = useSelector(state => state.movie.genresLoaded)
  const movies = useSelector(state => state.movie.movies)
  
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    dispatch(getGenres())
  },[])

  useEffect(() => {
    if(genresLoaded){
      console.log("debug")
      dispatch(fetchMovies({type : "all"}))
      console.log('movies',movies)
    }
  },[genresLoaded])

  window.onscroll = () => {
    setIsScrolling(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }

  const playTrailer = () => {
    navigate("/trailer" , {
      replace : true
    })
  }

  return (
    <div>
      <Navbar isScrolled={isScrolling} ></Navbar>
      <div className='poster'>
        <img src={poster} className='poster__img' />
      </div>
      <div className='banner'>
        <div className='banner__title'>
          <img src={banner} />
        </div>
        <div className='banner__buttons'>
          <button className='banner__buttons--play' onClick={playTrailer}>
            <FaPlay />
            Play
          </button>
          <button className='banner__buttons--info'  >
            <AiOutlineInfoCircle />
            More Info
          </button>
          </div>
      </div>
      <div>
        <Slider movies={movies} ></Slider>
      </div>
    </div>
  )
}

export default Home