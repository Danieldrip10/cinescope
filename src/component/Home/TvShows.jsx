export default function TvShows(props) {
  return(
    <div>
           <div>
            <img src={`https://image.tmdb.org/t/p/w500${props.img}`} alt="MovieImg" className="photo"/>
            <span className="subtittle">{props.span}</span>
            <span className="rate">{props.rating}</span>
            <span className="rate">{props.release}</span>
          </div>


         


       </div>
  )
}