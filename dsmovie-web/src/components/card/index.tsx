import MovieScore from 'components/movieScore';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  image: string;
  title: string;
  count: number;
  score: number;
}

function MovieCard(props: MovieCardProps) {
  const { id, image, title, count, score } = props;

  return (
    <div key={id}>
      <img className='dsmovie-movie-card-image' src={image} alt={title} />
      <div className='dsmovie-card-bottom-container'>
        <h3>{title}</h3>
        <MovieScore score={score} count={count} />

        <Link to={`/form/{id}`}>
          <div className='btn btn-primary dsmovie-btn'>Avaliar</div>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
