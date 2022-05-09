import MovieStars from 'components/star';
import './styles.css';
interface MovieScoreProps {
  score: number;
  count: number;
}

function MovieScore(props: MovieScoreProps) {
  const { score, count } = props;

  return (
    <div className='dsmovie-score-container'>
      <p className='dsmovie-score-value'>
        {score > 0 ? score.toFixed(1) : '-'}
      </p>
      <MovieStars />
      <p className='dsmovie-score-count'>{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
