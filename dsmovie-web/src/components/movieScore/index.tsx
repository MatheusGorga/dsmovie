import MovieStars from 'components/star';
import './styles.css';
interface MovieScoreProps {
  score: number;
  count: number;
}

function MovieScore({ score, count }: MovieScoreProps) {
  return (
    <div className='dsmovie-score-container'>
      <p className='dsmovie-score-value'>
        {score > 0 ? score.toFixed(1) : '-'}
      </p>
      <MovieStars score={score} />
      <p className='dsmovie-score-count'>{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
