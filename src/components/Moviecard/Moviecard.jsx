import "./MovieCard.css";

import { useDispatch, useSelector } from "react-redux";

import { addMovie, removeMovie } from "../../redux/watchlistSlice";

function MovieCard({ movie, onOpen }) {
  const dispatch = useDispatch();

  const watchlist = useSelector((state) => state.watchlist.movies);

  const isAdded = watchlist.some((item) => item.id === movie.id);

  const handleWatchlist = (e) => {
    e.stopPropagation();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      const shouldLogin = window.confirm(
        "Please login first to add movies to your watchlist.",
      );

      if (shouldLogin) {
        window.location.href = "/login";
      }

      return;
    }

    if (isAdded) {
      dispatch(removeMovie(movie.id));
    } else {
      dispatch(addMovie(movie));
    }
  };

  return (
    <div className="movie-card" onClick={() => onOpen(movie)}>
      <img src={movie.poster} alt={movie.title} />

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p> {movie.rating}</p>

        <button onClick={handleWatchlist}>
          {isAdded ? "Remove" : "Add To Watchlist"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
