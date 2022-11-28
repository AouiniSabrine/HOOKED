import React from 'react'
import MovieCards from './MovieCards'

function MovieListe({movies}) {
  return (
    <div>
      {
        movies.map(el=>
            <MovieCards el={el} />
        
          )
      }
    </div>
  )
}

export default MovieListe
