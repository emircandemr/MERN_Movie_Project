import React from 'react'
import './NotFound.scss'
import { Link, useNavigate } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'

const NotFound = () => {
    const navigate = useNavigate();

    const notFoundHandler = () => {
        navigate('/',{replace : true})
    }

  return (
    <div className='notFound'>
        <h1 className='notFound__title'>😥😥😥</h1>
        <p className='notFound__text'>We couldn't find what you were looking for.</p>
        <button className='notFound__link' onClick={notFoundHandler}>
            <BiArrowBack/>
             Go Back to Home
        </button>
    </div>
  )
}

export default NotFound