import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieModal from "../../components/MovieModal/MovieModal";
import { getMovies } from "../../services/movieApi";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await getMovies();
    setMovies(data);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setRatingFilter("");
    setYearFilter("");
  };

  const filterMovies = (movieList) => {
    return movieList.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesRating =
        !ratingFilter || movie.rating >= Number(ratingFilter);

      const matchesYear =
        !yearFilter ||
        new Date(movie.releaseDate).getFullYear().toString() === yearFilter;

      return matchesSearch && matchesRating && matchesYear;
    });
  };

  const trendingMovies = filterMovies(
    movies.filter((movie) => movie.category === "trending"),
  );

  const topRatedMovies = filterMovies(
    movies.filter((movie) => movie.category === "topRated"),
  );

  const upcomingMovies = filterMovies(
    movies.filter((movie) => movie.category === "upcoming"),
  );

  return (
    <div className="home">
      <div className="filters-container">
        <input
          type="text"
          placeholder="🔍 Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          className="filter-select"
        >
          <option value="">⭐ All Ratings</option>
          <option value="7">7+ Rating</option>
          <option value="8">8+ Rating</option>
          <option value="9">9+ Rating</option>
        </select>

        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="filter-select"
        >
          <option value="">📅 All Years</option>

          {[
            ...new Set(
              movies.map((movie) => new Date(movie.releaseDate).getFullYear()),
            ),
          ]
            .sort((a, b) => b - a)
            .map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>

        <button className="filter-select" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      <section className="movie-section">
        <h1>🔥 Trending Movies</h1>

        <div className="movie-grid">
          {trendingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onOpen={setSelectedMovie} />
          ))}
        </div>
      </section>

      <section className="movie-section">
        <h1>⭐ Top Rated Movies</h1>

        <div className="movie-grid">
          {topRatedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onOpen={setSelectedMovie} />
          ))}
        </div>
      </section>

      <section className="movie-section">
        <h1>🎬 Upcoming Movies</h1>

        <div className="movie-grid">
          {upcomingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onOpen={setSelectedMovie} />
          ))}
        </div>
      </section>

      <MovieModal movie={selectedMovie} close={() => setSelectedMovie(null)} />
    </div>
  );
}

export default Home;
