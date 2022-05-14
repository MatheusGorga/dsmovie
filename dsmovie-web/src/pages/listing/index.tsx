import axios from 'axios';
import MovieCard from 'components/card';
import Pagination from 'components/pagination';
import { useEffect, useState } from 'react';
import { MoviePage } from 'types/movie';
import { BASE_URL } from 'utils/requests';

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=1`).then((response) => {
      const data = response.data as MoviePage;
      setPageNumber(data.number);
      console.log(data);
    });
  }, []);

  const movie = {
    id: 1,
    image:
      'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg',
    title: 'The Witcher',
    count: 2,
    score: 4.5,
  };

  return (
    <>
      {pageNumber}
      <Pagination />

      <div className='container'>
        <div className='row'>
          {[1, 2, 3, 4, 5, 6].map((e) => {
            return (
              <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                <MovieCard
                  id={movie.id}
                  image={movie.image}
                  title={movie.title}
                  count={movie.count}
                  score={movie.score}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Listing;
