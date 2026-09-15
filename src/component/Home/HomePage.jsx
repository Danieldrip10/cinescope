import NavBar from "./NavBar";
import Body from "./Body";
import MovieCard from "./MovieCard";

import TopRated from "./TopRated";

import "../Home/HomePage.css";
import MainCard from "./MainCaard";
import LastDetails from "./Last";


import { useEffect, useState } from "react";



import TvShows from "./TvShows";
import LoadingSate from "./LaodingState";
import ErrorState from "./ErrorState";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [tvShows, SetTvShows] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(false)
 
  // const [hanleError, setHandleError] = useState(false)




  const apiKey = import.meta.env.VITE_API_KEY;

   useEffect(() => {
    const handlefetch = async () => {
      
      try {

        const response = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`,
        );
        const data = await response.json();
        SetTvShows(data.results);
        console.log(data.results) 
        
      } catch (error) {
        console.log(error);
      
        
      }
    };  
    handlefetch();
  }, []);


  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`,
        );
        const data = await response.json();
        console.log(data.results);
        setTopRated(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetch();
  }, []);

  useEffect(() => {
    const handlefetch = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`,
        );
        const data = await response.json();
        setTrendingMovies(data?.results);
        // console.log(data.results)
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
        
      }
    };
    handlefetch();
  }, []);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
        );
        const data = await response.json();
        console.log(data.results);
        setPopularMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetch();
  }, []);

  return (
    <div>
      <NavBar />
      <Body />
      <div>
        <div className="details">
          <h3 className="trend">Trending Now</h3>
          <button classNaxme="see">See all</button>
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



