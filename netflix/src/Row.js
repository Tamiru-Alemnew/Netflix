import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from "./axios";
const base_url = "https://image.tmdb.org/t/p/original/"
function Row({title , fetchUrl , islargerow}) {
  const [movies , setMovies] = useState([]);
  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results)
      console.log(request.data.results);
      return request;
      }
    fetchData();
  },[fetchUrl]);
console.log(movies)
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row_posters'>
          {movies.map((movie)=>(
            <img
            className={`row_poster ${islargerow && "row_posterLarge"}`}
            src={`${base_url}${islargerow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}
          />
          ))}
        </div>
    </div>
  )
}

export default Row;