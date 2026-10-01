import { useContext, createContext, useState, useEffect } from "react";

const movieProvider = createContext();

export function MovieContext({ children }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`,
        );
        const data = await response.json();
        setTrendingMovies(data.results);
        console.log(data.results);
        console.table(data.results);
        console.error("error", data.results);
      } catch (error) {
        console.error(error);
        console.log(error);
      }
    };
    handleFetch();
  }, []);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
        );
        const data = await response.json();
        setPopularMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetch();
  }, []);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
        );
        const data = await response.json();
        setTvShows(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetch();
  }, []);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`,
        );
        const data = await response.json();
        setTopRated(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetch();
  }, []);

  return (
    <movieProvider.Provider
      value={{
        trendingMovies,
        setTrendingMovies,
        tvShows,
        setTvShows,
        topRated,
        setTopRated,
        popularMovies,
        setPopularMovies,
      }}
    >
      {children}
    </movieProvider.Provider>
  );
}

export function UseMovieContext() {
  const context = useContext(movieProvider);

  if (!context) throw new Error("component must be inside of name context");
  return context;
}
