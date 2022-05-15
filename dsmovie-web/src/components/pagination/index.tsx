import { MoviePage } from 'types/movie';
import { ReactComponent as Arrow } from '../../assets/img/arrow.svg';
import './style.css';

interface PageProps {
  page: MoviePage;
  onChange: Function;
}

function Pagination({ page, onChange }: PageProps) {
  return (
    <div className='dsmovie-pagination-container'>
      <div className='dsmovie-pagination-box'>
        <button
          className='dsmovie-pagination-button'
          disabled={page.first}
          onClick={() => onChange(page.number - 1)}
        >
          <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button className='dsmovie-pagination-button' disabled={page.last}>
          <Arrow
            className='dsmovie-flip-horizontal'
            onClick={() => onChange(page.number + 1)}
          />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
