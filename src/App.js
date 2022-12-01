import  React,{ useState } from 'react';
import {MovieData} from './MovieData.js';
import MovieListe from './Component/MovieListe';
import AddMovie from './Component/AddMovie';
import SearchMovie from './Component/SearchMovie';
import './App.css'
function App() {
  const[movies,setMovies]=useState(MovieData)
  const [input,setInput]=useState("")
  
  console.log(movies)
  const AddHandler=(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  return (
    <div className="App">
      <SearchMovie setInput={setInput} />
      <MovieListe movies={movies} input={input}  />
      <AddMovie AddHanlder={AddHandler}/>
    </div>
  );
}

export default App;
