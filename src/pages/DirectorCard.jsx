import { useParams, useOutletContext, Outlet, Link } from 'react-router-dom';
import MovieList from '../pages/MovieList';

function DirectorCard() {
  const { id } = useParams();
  const { directors, setDirectors } = useOutletContext();

  const director = directors.find(d => String(d.id) === id);
  if (!director) return <h2>Director not found.</h2>;

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>

      <h3>Movies</h3>
      <MovieList movies={director.movies} />
      <Link to={`/directors/${director.id}/movies/new`}>Add a Movie</Link>

      <Outlet context={{ director, setDirectors }} />
    </div>
  );
}

export default DirectorCard;