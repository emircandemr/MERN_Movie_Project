import React, { useRef, useState } from 'react'
import './CardSlider.scss'
import Card from '../Card/Card'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CardSlider = ({movies,title}) => {

  const moviesSliderRef = useRef();
  const [scrollX, setScrollX] = useState(0);
  const [showArrow, setShowArrow] = useState(false);

  const handleArrow = (direction) => {
  }

  return (
    <div className='slider'
    onMouseEnter={() => setShowArrow(true)}
    onMouseLeave={() => setShowArrow(false)}>
      <h1 className='slider__title'>{title}</h1>
      <div className='slider__wrapper'>
        <div className={`slider__arrow slider__arrow--left ${!showArrow ? 'slider__arrow--hide' : ''} `}>
          <AiOutlineLeft  onClick={() => handleArrow('left')}  />
        </div>
        <div className='slider__content' ref={moviesSliderRef}>
        {movies.map( (movie,index) => {
          return <Card movie={movie} key={index}  />
        } )}
        </div>
        <div className={`slider__arrow slider__arrow--right ${!showArrow ? 'slider__arrow--hide' : ''} `} >
          <AiOutlineRight className='slider__arrow-icon' onClick={() => handleArrow('right')} />
        </div>
      </div>
    </div>
  )
}

export default CardSlider  