import mypic from "../../assets/profilepic.jpeg";
import "../Home/Profile.css";
import { UseNameContext } from "../../context/UserContext";

export default function Profile() {
  const { UseName, Email } = UseNameContext();

  return (
    <div>
      <div>
        <div className="profile-header">
          <h2 className="top">Profile</h2>
        </div>

        <div className="profile-container">
          <img src={mypic} alt="profilepics" className="profile-img" />
          <h2 className="profile-name">{UseName}</h2>
          <span className="profile-email">{Email}</span>
        </div>

        <div className="overall-container">
          <div className="overdiv">
            <div>
              <h2>Watchlist</h2>
              <span className="profile-email">24 movies</span>
            </div>
            <div>
              <span className="profile-email">go</span>
            </div>
          </div>

          <div className="overdiv">
            <div className="onediv">
              <h2>Watchlist</h2>
              <span className="profile-email">24 movies</span>
            </div>
            <div>
              <span className="profile-email">go</span>
            </div>
          </div>

          <div className="overdiv">
            <div>
              <h2>Watchlist</h2>
              <span className="profile-email">24 movies</span>
            </div>
            <div>
              <span className="profile-email">go</span>
            </div>
          </div>
        </div>

        <div className="log-out">
          <span className="log-outb">Log Out</span>
        </div>
      </div>
    </div>
  );
}
