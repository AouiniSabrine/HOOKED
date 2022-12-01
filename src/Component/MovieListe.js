import MovieCards from './MovieCards'

function MovieListe ({movies,input}) {
  
  return (
    <div>
      {
        movies.filter(el=> el.name.toLowerCase().includes(input.toLowerCase().trim()))
        .map(el=>
            <MovieCards el={el}/>
        
          )
      }
    </div>
  )
}

export default MovieListe
