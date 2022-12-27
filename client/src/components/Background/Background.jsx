import React from 'react'
import './Background.scss'
import BackgroundImg from '../../assets/img/background.jpg'

const Background = ({children}) => {
  return (
    <div className='background'>
        <img className='background__img' src={BackgroundImg} />
        <div className='background__overlay'>
            {children}
        </div>
    </div>
  )
}

export default Background