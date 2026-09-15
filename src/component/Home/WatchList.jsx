import "../Home/watchlist.css"
import { useEffect, useState } from "react"

export default function WatchList() {
  const [movieFromStorage, setMovieFromStorage] = useState([])
 

  useEffect(() => {
      const movie = localStorage.getItem("movie")
      console.log()
      const parseFromLoacalStorage = JSON.parse(movie)
      setMovieFromStorage(parseFromLoacalStorage)

  }, [])

  return(
    <div>
      {movieFromStorage?.map((movie) => {
        return(
             <div key={movie?.id} className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="img-photo"/>
        <div className="img-rate">
           <span className="subtittle">{movie.title}</span>

        {/* <span className="rating">{.rating}</span> */}
        </div>
       <button>Delete</button>
      
      </div>
        )
      })}
         

      </div>


    
  )
}