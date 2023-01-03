import React, { useEffect, useState } from 'react'
import './Card.scss'
import TrailerModal from '../TrailerModal/TrailerModal';
import { useDispatch, useSelector } from 'react-redux';
import {getMovieTrailer} from '../../store/Slice/movie-slice'

const Card = ({movie,isLiked=false}) => {
    const dispatch = useDispatch()
    const trailer = useSelector(state => state.movie.trailer)
    const [isTrailerActive, setTrailerActive] = useState(false)

    const handleModal = async (statu) => {
        setTrailerActive(statu)
        dispatch(getMovieTrailer(movie))
    }

    return (
    <div className='movieCard' >
        <img onClick={() => handleModal(true)} src={`https://image.tmdb.org/t/p/w500${movie.image}`} />

        {isTrailerActive &&
           <TrailerModal movie={movie} handleModal={handleModal} isLiked={isLiked} trailer={trailer}/>
        }

    </div>
    )
}

export default Card