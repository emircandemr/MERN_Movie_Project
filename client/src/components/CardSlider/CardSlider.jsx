import React, { useRef, useState } from 'react'
import './CardSlider.scss'
import Card from '../Card/Card'

const CardSlider = ({movies,title,isTitleActive=true}) => {

  const moviesSliderRef = useRef();

  return (
    <div className='slider'>
    {isTitleActive && <h1 className='slider__title'>{title}</h1>}
      <div className='slider__wrapper'>
        <div className='slider__content' ref={moviesSliderRef}>
        {movies.map( (movie,index) => {
          return <Card  movie={movie} key={index}  />
        } )}
        </div>
      </div>
    </div>
  )
}

export default CardSlider  