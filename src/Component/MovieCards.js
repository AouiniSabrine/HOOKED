import React from 'react'

function MovieCards({el}) {
  return (
    <div>
      <h2>{el.name}</h2>
      <img src={el.image}/>
    </div>
  )
}

export default MovieCards
