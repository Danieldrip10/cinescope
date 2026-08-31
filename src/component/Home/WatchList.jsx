import "../Home/watchlist.css"

export default function WatchList(props) {
  return(
    <div>
     

      <div className="movie-card">
        <img src={props.img} alt="" className="img-photo"/>
        <div className="img-rate">
           <span className="subtittle">{props.span}</span>
        <span className="rating">{props.rating}</span>
        </div>
       
      </div>




    </div>


    
  )
}