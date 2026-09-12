import backgroundImage from "../../assets/building.jpg"
import "../Home/Last.css"
import small from "../../assets/moviefour.jpg"
import NavBar from "./NavBar"
import firstactor from "../../assets/actortwo.jpg"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function LastDetails() {
  const {id} = useParams()
 const apiKey = import.meta.env.VITE_API_KEY;
 const [movieDetails, setMovieDetails] = useState()
  const [addedWatchList, setAddedWatchList] = useState(true)

  useEffect(()=>{

    const handleFetch = async () =>{
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=credits,videos`)
        const data = await response.json()
        setMovieDetails(data);
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
      handleFetch();
  }

 ,[] );



    // localStorage   
 const addToWatchList = (movie)=> {

   const getMovie = localStorage.getItem("movie");

   const parseItem = JSON.parse(getMovie) || [];

    parseItem.push(movie);

   localStorage.setItem("movie", JSON.stringify(parseItem))
  setAddedWatchList(false)
 }



  return(
    <div>
      <NavBar/>
     <div className="back">
        <span>Back</span>
        <span>Love</span>

     </div>

     <div className="picture" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path})`}}>
        
       <div className="last-big-container">
            <div className="small-card">
              <img className="img-card" src={`https://image.tmdb.org/t/p/w500${movieDetails?.
poster_path}`} alt="movie-img" />
            </div>


            <div className="movie-info">
                <div className="name-details"></div>
                  <h1>{movieDetails?.title}</h1>
                  <div className="year">
                    <span className="movie-rate">9.0</span>
                    <span className="hour">{movieDetails?.release_date}</span>
                    <span className="hour">2h 32m</span>
                  </div>
                  <br />

                  <div className="all-btn">
                    <button className="one-btn">Action</button>
                    <button className="one-btn">Crime</button>
                    <button className="one-btn">Drama</button>

                  </div>
                 

                  
                  <br />


                  <span className="short-tittle">{movieDetails?.overview}</span>
                  <br />
                    <div className="btn-cont">              
                      <button className="watchlist-add" onClick={() => addToWatchList(movieDetails)}>
                        {addedWatchList? "Add to Watchlist" : "Added"}
                         
                         
                         </button>
                      <button className="watch-trail">Watch Trailer</button>
                    </div>


                    <div className="full-overview">
                       <h2>Overview</h2>
                      <div className="overview">
                     
                      <div class="info">
                        <h4>Director</h4>
                        <p>Christopher Nolan</p>
                      </div>

                      <div class="info">
                        <h4>Revenue</h4>
                        <p>{movieDetails?.revenue}</p>
                      </div>

                      <div class="info">
                        <h4>Where's</h4>
                        <p>Jonathan Nolan, Christopher Nolan</p>
                      </div>

                      

                      <div class="info">
                        <h4>Release Date</h4>
                        <p>July 18, 2008</p>
                      </div>

                      <div class="info">
                        <h4>Status</h4>
                        <p>Released</p>
                      </div>
                    </div>
                    </div>
                  
                  <div className="cast">
                      <div className="top-cast">
                        <h2>Top Cast</h2>
                        <span>go</span>
                      </div>
                       
                      {/* <div className="name-img">
                         <img className="cast-img" src={firstactor} alt="actor" />
                         <h6>Christian Bale</h6>
                         <span>Batman</span>
                      </div> */}
                  </div>
                    
               </div>
       </div>


     </div>



    </div>
  )
}