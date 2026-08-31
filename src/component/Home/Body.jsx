import "../Home/Body.css"
import backgroundImage from "../../assets/space.jpg";

export default function Body() {
  return(
    <div className="body"
     style={{backgroundImage: `url(${backgroundImage})`}}>

      <div className="movie-tittle">
        <div>
          <span className="feat">FEATURED</span>
          <h2 className="tittle">Interstellar</h2>
        </div>

        <div className="movie-details">
          <span>8.7</span>
          <span>2014</span>
          <span>Sci-Fi </span>
          <span>Drama</span>
        </div>

        <div>
          <span className="movie-subtittle"> A team of explorers travel through a warmhole in space in attempt to ensure <br></br>humanity's survival</span>
        </div>

        <div className="watch">
          <button className="trailer">Watch Trailer</button>
          <button className="list">Watchlist</button>
        </div>


      </div>
      
    </div>
  )
}