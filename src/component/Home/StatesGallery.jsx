import "../Home/StatesGallery.css"

export default function StateGallery() {
  return(
    <div>
      <div className="begin">
        <h2 className="tittle">UI States Gallery</h2>
        <span className="subtittle">Desktop component states for loading, errors, and empty results.</span>
      </div>

      <div className="overall">
        <div className="same">
          <div className="middle">
            <h4>Loading Movies...</h4>
            <span className="subtittle">Please wait</span>
          </div>
         
        </div>

        <div className="same">
          <div>
            <h4 className="middle">Something went wrong.</h4>
            <span className="subtittle">We couldn't load the movies.</span>
            <br />
            <button className="try-again">Try Again</button>
          </div>
        </div>

        <div className="same">
          <div>
            <h4 className="middle">No movies found</h4>
          <span className="subtittle">Try searching for another movie.</span>
          <br />
          <button className="search-btn">Clear Search</button>
          </div>
        </div>


      </div>
    </div>
  )
}