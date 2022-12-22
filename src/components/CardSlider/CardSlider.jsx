import React from 'react'
import './CardSlider.scss'
import Card from '../Card/Card'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CardSlider = ({movies,title}) => {


  return (
    <div className='slider'>
        <h1 className='slider__title'>{title}</h1>
      <div className='slider__content'>
      {movies.map( (movie,index) => {
        return <Card movie={movie} key={index}  />
      } )}
      </div>
    </div>
  )
}

export default CardSlider  