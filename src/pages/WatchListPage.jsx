
import WatchList from "../component/Home/WatchList"


export default function WatchListPage() {
  return(
   <div>
     <div>
       <div className="discovery-head">
          <h2 className="discovery-tittle">My Watchlist</h2>
          <p className="discovery-subtittle">
            Movies you have saved for later.
          </p>
        </div> 

        <div className="movie-list">
          <WatchList  />
         
        </div>
        <div className="mighty">
          <h2>Your watchlist is empty</h2>
          <span className="subtittle-watch">Save movies to find them here</span>
          <br />
          <br />
          <button className="btn-dis">Discover Movies</button>
        </div>

      
    </div>
   </div>
  )
}