import { Link, useParams } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const { id } = useParams();

  if (!movies || movies.length === 0) return <p>No movies yet.</p>;

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/directors/${id}/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;