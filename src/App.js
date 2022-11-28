import  React,{ useState } from 'react';
import './App.css';
import MovieCards from './Component/MovieCards';
import MovieListe from './Component/MovieListe';
import MovieData from './MovieData';

function App() {
  const[movies,setMovies]=useState(MovieData)
  console.log(movies)
  return (
    <div className="App">
      <MovieListe movies={movies}/>
      <MovieCards/>
    </div>
  );
}

export default App;
