import NavBar from "./NavBar";
import Body from "./Body";
import MovieCard from "./MovieCard";

import TopRated from "./TopRated";

import "../Home/HomePage.css";
import MainCard from "./MainCaard";
import LastDetails from "./Last";


import { useState } from "react";



import TvShows from "./TvShows";
import LoadingSate from "./LaodingState";
import ErrorState from "./ErrorState";
import { Link } from "react-router-dom";

import { UseMovieContext } from "../../context/MovieContext";

export default function HomePage() {
 
  const [loading, setLoading] = useState(false)
 
  // const [hanleError, setHandleError] = useState(false)
 

  const {topRated, trendingMovies, popularMovies, tvShows} = UseMovieContext()




   

  return (
    <div>
      <NavBar />
      <Body />
      <div>
        <div className="details">
          <h3 className="trend">Trending Now</h3>
          <button className="see">See all</button>
        </div>
        {loading ? <LoadingSate /> : 


        <div className="movie-list">
          {trendingMovies.map((movie) => {
            return (
              <Link to={`/MovieDetails/${movie.id}`}>
                
              <MovieCard
                key={movie.id}
                img={movie.poster_path}
                span={movie.title}
                rating={movie.vote_average}
                release={movie.release_date}
              />
              </Link>
              
              

            );
          })}
          {ErrorState && (<ErrorState />)}
        </div>}
        
        
      </div>

      <div>
        <div className="details">
          <h3 className="trend">Propular Movies</h3>
          <span className="see">See all</span>
        </div>

        <div className="movie-list">
          {popularMovies.map((movies) => {
            return (
              <MainCard
                key={movies.id}
                img={movies.poster_path}
                span={movies.title}
                rating={movies.vote_average}
                release={movies.release_date}
              />
            );
          })}
        </div>
      </div>

      <div>
        <div className="details">
          <h3 className="trend">Top Rated</h3>
          <span className="see">See all</span>
        </div>

        <div className="movie-list">
          {topRated.map((movies) => {
            return <TopRated
            key={movies.id}
            img={movies.poster_path}
            span={movies.title}
             rating={movies.vote_average}
             release={movies.release_date}
            />;
          })}
        </div>


      </div>


      
          <div>
        <div className="details">
          <h3 className="trend">Tv Shows</h3>
          <span className="see">See all</span>
        </div>


      {loading? <p>Loading </p> :  <div className="movie-list">
          
          {tvShows.map((movies) => {
            return (
              <TvShows
                 key={movies.id}
                img={movies.poster_path}
                span={movies.title}
                rating={movies.vote_average}
                release={movies.release_date}
            
              />   
            );
          })}
        </div>}
      </div>
    
      <br />

      <br />
      <br />
      <br />

      <LastDetails/>

     
    </div>
  );
}



