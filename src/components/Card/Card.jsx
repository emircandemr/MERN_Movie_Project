import React, { useEffect, useState } from 'react'
import './Card.scss'
import TrailerModal from '../TrailerModal/TrailerModal';
import { useDispatch, useSelector } from 'react-redux';
import { baseHTTP } from '../../services/baseHTTP';
import {getMovieTrailer} from '../../store/Slice/movie-slice'

const Card = ({movie}) => {
    const dispatch = useDispatch()
    const trailer = useSelector(state => state.movie.trailer)
    const [isTrailerActive, setTrailerActive] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    // const [trailer,setTrailer] = useState(null)

    // const getMovieTrailer = async (id) => {
    //     const type = movie?.media_type === 'movie' ? 'movie' : 'tv'
    //     const response = await baseHTTP.get(`${type}/${id}/videos`)
    //     const result = response?.data.results.find((video) => video.type === 'Trailer');
    //     return result?.key
    // }

    const handleModal = async (statu) => {
        setTrailerActive(statu)
        console.log(movie)
        dispatch(getMovieTrailer(movie))
        console.log(trailer)

        // await getMovieTrailer(movie.id)
        // .then((result) => {setTrailer(result)})
        
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