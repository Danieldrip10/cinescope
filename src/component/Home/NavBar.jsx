import Logo from "../shared/logo"
import "../Home/NavBar.css"
import { Link } from "react-router-dom"

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
                 
                  <Link to="/">Home</Link>
                  <Link to="/DiscoveryPage">Discover</Link>
                  <Link to="/Watchlist">Watchlists</Link>
                  

                </div>
         </div>
                    
              
                
            
            <div className="auth-btn">
             
                <Link to="/Register">
                 <button className="trailer">Register</button>
                </Link>

                <Link to="/SignInPage">
                <button className="trailer">SignIn</button>
                </Link>
              

            </div>
          

            <div>
              <span>Search</span>
            </div>
    </div>

  </div>
  






  )
}