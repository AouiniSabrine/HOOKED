import React from 'react'
import ReactStars from 'react-stars'


function MovieCards({el}) {
  return (
    <div>
      <h2>{el.name}</h2>
      <img src={el.image}/>
      <p> {el.description}</p>
      <ReactStars
      count={5}
      value={el.rating}
      edit={false}
      size={24}
      color2={'#ffd700'}/>
    </div>
  )
}

export default MovieCards
