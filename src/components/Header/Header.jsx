import "./Header.css";
import { Link } from "react-router";
import { TOP_MOVIES, TOP_TV_SERIALS, MOVIE_TYPE, TV_TYPE } from "../../constants/message";

function Header() {
  return (
    <div className="header">
      <div className="logo-left">
        <Link to={"/"}>
          <img
            className="logo-img"
            src="https://cdn-icons-png.flaticon.com/128/3773/3773370.png"
            alt=""
          />
        </Link>
        <Link to={`/movie/${MOVIE_TYPE}`}>{TOP_MOVIES}</Link>
        <Link to={`/movie/${TV_TYPE}`}>{TOP_TV_SERIALS}</Link>
      </div>
    </div>
  );
}
export default Header;
