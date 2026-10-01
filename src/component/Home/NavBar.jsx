import Logo from "../shared/logo";
import "../Home/NavBar.css";
import { Link } from "react-router-dom";
import { UseNameContext } from "../../context/UserContext";

export default function NavBar() {
  const { UseName, UserPic } = UseNameContext();

  return (
    <div>
      <div className="header">
        <div className="first-nav">
          <div className="brand">
            <div className="logo">
              <Logo />
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

          <h2 className="hello">hello {UseName}!</h2>
        </div>

        <div className="prr-contain">
          <span>Search</span>
          <div>
            <Link to={"/profilepage"}>
              <img className="pro" src={UserPic} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
