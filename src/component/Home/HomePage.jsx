import NavBar from "./NavBar";
import Body from "./Body";
import MovieCard from "./MovieCard";
import Profile from "./Profile";
import TopRated from "./TopRated";

import "../Home/HomePage.css";
import MainCard from "./MainCaard";

import Discovery from "./Discovery";
import firstdis from "../../assets/discoveryone.jpg";
import seconddis from "../../assets/discoverytwo.jpg";
import thirddis from "../../assets/discoverythree.jpg";
import fourthdis from "../../assets/discoveryfour.jpg";
import { useEffect, useState } from "react";
import StateGallery from "./StatesGallery";
import WatchList from "./WatchList";

import watchone from "../../assets/photoone.jpg";
import TvShows from "./TvShows";

export default function HomePage() {
  const [tvShows, SetTvShows] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

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
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`,
        );
        const data = await response.json();
        setTrendingMovies(data.results);
        // console.log(data.results)
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
          <span className="see">See all</span>
        </div>

        <div className="movie-list">
          {trendingMovies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                img={movie.poster_path}
                span={movie.title}
                rating={movie.vote_average}
                release={movie.release_date}
              />
            );
          })}
        </div>
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


       <div className="movie-list">
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
        </div>
      </div>
      <br />
      <br />
      <br />

      <div>
        <NavBar />

        <div>
          <div className="discovery-head">
            <h2 className="discovery-tittle">Discovery Movies</h2>
            <p className="discovery-subtittle">
              Explore and find your next favourite movie.
            </p>
          </div>

          <div className="movie-type">
            <div>
              <input
                type="text"
                className="search-input"
                placeholder="Search movies..."
              />
            </div>

            <div className="btn-key">
              <button className="btn-search">All Genres</button>
              <button className="btn-search">Popular</button>
              <button className="btn-search">Release Date</button>
            </div>
          </div>
        </div>
        <div className="movie-list">
          <Discovery img={firstdis} span="Dune Part Two" rating="8.5" />
          <Discovery img={seconddis} span="Oppenheimer" rating="8.6" />
          <Discovery img={thirddis} span="The Batman" rating="7.6" />
          <Discovery img={fourthdis} span="Top Gun Maverick" rating="8.3" />
        </div>
      </div>
      <br />
      <br />
      <br />

      <StateGallery />

      <br />
      <br />
      <br />

      <div>
        <div className="discovery-head">
          <h2 className="discovery-tittle">My Watchlist</h2>
          <p className="discovery-subtittle">
            Movies you have saved for later.
          </p>
        </div>

        <div className="movie-list">
          <WatchList img={watchone} span="The Dark Knight" rating="8.5" />
          <WatchList img={watchone} span="The Dark Knight" rating="8.5" />
          <WatchList img={watchone} span="The Dark Knight" rating="8.5" />
          <WatchList img={watchone} span="The Dark Knight" rating="8.5" />
          <WatchList img={watchone} span="The Dark Knight" rating="8.5" />
          <WatchList img={watchone} span="The Dark Knight" rating="8.5" />
          <WatchList img={watchone} span="The Dark Knight" rating="8.5" />
          <WatchList img={watchone} span="The Dark Knight" rating="8.5" />
          <WatchList img={watchone} span="The Dark Knight" rating="8.5" />
          <WatchList img={watchone} span="The Dark Knight" rating="8.5" />
        </div>
        <div className="mighty">
          <h2>Your watchlist is empty</h2>
          <span className="subtittle-watch">Save movies to find them here</span>
          <br />
          <br />
          <button className="btn-dis">Discover Movies</button>
        </div>

        <br />
        <br />
        <br />

        <Profile />
      </div>
    </div>
  );
}
