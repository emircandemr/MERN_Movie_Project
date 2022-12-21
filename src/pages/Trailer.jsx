import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import video from '../assets/video/video.webm'
import '../assets/styles/Trailer.scss'

const Trailer = () => {
    const navigate = useNavigate();

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
        <video src={video} className='trailer__video' autoPlay loop muted  controls/>
    </div>
  )
}

export default Trailer