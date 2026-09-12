
import firstdis from "../assets/discoveryone.jpg";
import seconddis from "../assets/discoverytwo.jpg";
import thirddis from "../assets/discoverythree.jpg";
import fourthdis from "../assets/discoveryfour.jpg";

import NavBar from "../component/Home/NavBar";
import Discovery from "../component/Home/Discovery";

export default function DiscoveryPage() {
  return(
    <div>
       <div>
              <NavBar />
            </div>
    
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
  )
}