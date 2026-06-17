import "./MovieModal.css";

function MovieModal({ movie, close }) {
  if (!movie) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={close}>
          X
        </button>
        <img src={movie.poster} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>
          Release Date:
          {movie.releaseDate}
        </p>
        <button>Add To Watchlist</button>
      </div>
    </div>
  );
}

export default MovieModal;
