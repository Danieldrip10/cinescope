import Logo from "../shared/logo"
import "../Home/NavBar.css"

export default function NavBar() {
  return(
  <div>

    <div className="header">
         <div className="first-nav">
    
             <div className="brand">

                <div className="logo">
                  <Logo/>
                </div>
                <div>
                  <span className="brand-name">CineScope</span>
                </div>

            </div>

                <div className="links">
                  <a href="#">Home</a>
                  <a href="#">Discover</a>
                  <a href="#">Watchlist</a>

                </div>
         </div>
                    
              
                
            

          

            <div>
              <span>Search</span>
            </div>
    </div>

  </div>
  






  )
}