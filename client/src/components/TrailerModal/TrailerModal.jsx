import React, { useState } from 'react'
import './TrailerModal.scss'
import ReactPlayer from 'react-player'
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import auth from '../../utils/firebase-config';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import toast from 'react-hot-toast';

const TrailerModal = ({movie,handleModal,isLiked,trailer}) => {

    const navigate = useNavigate()
    const [email,setEmail] = useState(undefined)

    onAuthStateChanged(auth,(currentUser) => {
        if(currentUser){
            setEmail(currentUser.email)
        }
        else{
            navigate('/login', {replace: true})
        }
    })

    const addToMovieLikedList = async () => {
        try{
            await axios.post('http://localhost:5000/api/users/add', {email, movie :movie})
            toast('Movie added to your list',
            {
                icon: '👌',
                style: {
                background: '#333',
                color: '#fff',
                },
            })
            
        }
        catch(err){
            toast(err,
            {
                icon: '❌',
                style: {
                background: '#333',
                color: '#fff',
                },
            })
            console.log(err)
        }
    }

    const playTrailer = () => {
        navigate("/trailer" , {
            replace : true,
            state : {
                movie : movie
            }
        })
    }


  return (
    <div className='overlay'>

        <div className='overlay--layer' onClick={() => handleModal(false)} ></div>
        {trailer}
        <div className='overlay__content'>
            <ReactPlayer
                className='overlay__content--video'
                url={`https://www.youtube.com/watch?v=${trailer}`}
                width='100%'
                style={{objectFit:'cover'}}
                playing
                controls = {true}
                muted={true}
             />
            <div className='overlay__content--info'>
                <div className='overlay__content--info--icons'>
                    <IoPlayCircleSharp title="Play" onClick={playTrailer}/>
                    <RiThumbUpFill title="Like" />
                    <RiThumbDownFill title="Dislike" />
                    {isLiked ? (
                    <BsCheck title="Remove from List"/>) : 
                    (<AiOutlinePlus title="Add to my list" onClick={addToMovieLikedList}  />)}
                </div>
                <div className='overlay__content--info--descr' >
                    <div className='overlay__content--info--descr--text'>
                        <h3>{movie.name}</h3>
                        <p>{movie.overview}</p>
                    </div>
                    <div className='overlay__content--info--descr--content'>
                        <ul>
                            <li> Release Date : <span> {movie.release_date} </span> </li>
                            <li> Rating : <span> {movie.vote_average} </span> </li>
                            <li> Genres :  {movie.genres.map((genre,index) => (
                                    <span  key={index}>{genre}</span>
                                ))} 
                                
                            </li>
                            <li> Language : <span> {movie.original_language}</span> </li>

                        </ul>
                    
                    </div>

                </div>


            </div>
        </div>
</div>

  )
}

export default TrailerModal