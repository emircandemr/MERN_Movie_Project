import React, { useEffect } from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import '../assets/styles/Trailer.scss'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux';
import {getMovieTrailer} from '../store/Slice/movie-slice'

const Trailer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const location = useLocation();
    const trailer = useSelector(state => state.movie.trailer)
    
    useEffect( () => {
        dispatch(getMovieTrailer(location.state.movie))
    },[dispatch])

    const backHandler = () => {
        navigate('/', {
            replace : true
        })
    }
    return (
    <div className='trailer'>
        <div className='trailer__back'>
            <BsArrowLeft onClick={backHandler} />
        </div>
        <ReactPlayer
                className='trailer__video'
                url={`https://www.youtube.com/watch?v=${trailer}`}
                width='100vw'
                height='100vh'
                style={{objectFit:'cover'}}
                playing
                controls = {true}
                muted={true}
             />
    </div>
  )
}

export default Trailer