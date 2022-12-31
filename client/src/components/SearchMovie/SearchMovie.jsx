import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieTrailer, searchMovies } from '../../store/Slice/movie-slice'
import TrailerModal from '../TrailerModal/TrailerModal'
import './SearchMovie.scss'

const SearchMovie = ({searchedInput,setShowSearchResult,showSearchResult}) => {

    const dispatch = useDispatch()
    const {searchedMovies} = useSelector(state => state.movie)
    const [isTrailerActive, setTrailerActive] = useState(false)
    const trailer = useSelector(state => state.movie.trailer)
    const [movie,setMovie] = useState(null)

    useEffect(() => {
        if(searchedInput === '' || searchedInput === undefined) return
        dispatch(searchMovies({query : searchedInput}))
    },[searchedInput])

    const handleModal = (statu) => {
        setTrailerActive(statu)
    }
    
    const handleSearch = (movie) => {
        dispatch(getMovieTrailer(movie))
        setMovie(movie)
        handleModal(true)
    }

    return (
        <div className={`search ${!showSearchResult ? 'hide' : '' } `}
        onMouseLeave={() => setShowSearchResult(false)}
        >
        {searchedMovies.map((movie,index) => (
            <div key={index} className='search__movie' onClick={() => handleSearch(movie)} >
                {movie.name}
            </div>
        ))}
        {isTrailerActive && 
        <TrailerModal movie={movie} handleModal={handleModal} trailer={trailer} isLiked={false}/>
    }
    </div>
  )
}

export default SearchMovie