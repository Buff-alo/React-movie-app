import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
function Favourite() {
  const { favourites } = useMovieContext();

  if (favourites) {
    return (
      <div className="favourites">
        <h2>Your Favourites</h2>
        <p>Here are your favourite movies:</p>
        <div className="movies-grid">
          {favourites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favourites-empty">
      <h2>No Favourites Yet</h2>
      <p>
        Add some movies to your favourites by clicking on the ♥ button next to
        each movie.
      </p>
    </div>
  );
}

export default Favourite;
