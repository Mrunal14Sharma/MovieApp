import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { clearWatchlist } from "../../redux/watchlistSlice";

import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.watchlist.movies.length);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    dispatch(clearWatchlist());

    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <h2>MovieApp</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/watchlist">Watchlist ({count})</Link>

        {user ? (
          <>
            <span>Hello, {user.name}</span>

            <Link onClick={handleLogout}>Logout</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
