import "../Home/MainCard.css"

export default function MainCard(props) {
  return(
    <div>

              <img src={`https://image.tmdb.org/t/p/w500${props.img}`} alt=""  className="dan"/>    
              <span>{props.span}</span>
               <span className="rate">{props.rating}</span>
               <span className="rate">{props.release}</span>



          
    </div>
  )
}