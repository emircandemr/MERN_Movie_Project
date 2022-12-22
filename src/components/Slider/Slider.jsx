import React from 'react'
import './Slider.scss'
import CardSlider from '../CardSlider/CardSlider'

const Slider = ({movies}) => {

  const getMovies = (from,to) => {
    return movies.slice(from,to)
  }

  return (
    <div>
      <CardSlider movies={getMovies(0,10)} title="Trending Now" />
      <CardSlider movies={getMovies(10,20)} title="Popular Movies" />
      <CardSlider movies={getMovies(20,30)} title="New Releases" />
      <CardSlider movies={getMovies(30,40)} title="My Suggestion" />
      <CardSlider movies={getMovies(40,50)} title="Epics Movies" />
      <CardSlider movies={getMovies(50,60)} title="Random Movies" />
    </div>
  )
}

export default Slider