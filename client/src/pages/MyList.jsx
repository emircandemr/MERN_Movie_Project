import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import Navbar from '../components/Navbar/Navbar';
import { getUserLikedMovies } from '../store/Slice/movie-slice';
import '../assets/styles/Movies.scss'
import NotFound from '../components/NotFound/NotFound';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../utils/firebase-config';
import Card from '../components/Card/Card';

const MyList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const LikedMovies = useSelector(state => state.movie.LikedMovies)
    const status = useSelector(state => state.movie.status)
    const [isScrolling, setIsScrolling] = useState(false)
    const [email,setEmail] = useState(undefined)

    onAuthStateChanged(auth,(currentUser) => {
        if(currentUser){
            setEmail(currentUser.email)
        }else{
            navigate('/login', {replace: true})
        }
    })

    useEffect(() => {
      if(email){
        dispatch(getUserLikedMovies(email))
      }
    },[dispatch,email])
  
    window.onscroll = () => {
      setIsScrolling(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    }
  
  return (
    <div>
      {status === 'pending' && <Loader/>}
      <Navbar isScrolled={isScrolling} ></Navbar>
      {LikedMovies?.length > 0 ? 
        <div className='myList'>
          <h1 className='myList__title'>My List</h1>
          <div className='myList__wrapper'>
             {LikedMovies.map( (movie,index) => {
               return <Card movie={movie} key={index} isLiked={true} />
              })}
            </div>
        </div>
        :
        <NotFound></NotFound>
      }
    </div>
  )
}

export default MyList