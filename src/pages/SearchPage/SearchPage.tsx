import type { Movie } from '@/shared/types/movie.ts';
import MovieInfo from '@/components/MovieInfo/MovieInfo.tsx';
import Pagination from '@/components/Pagination/Pagination.tsx';
import { useSearchMovieQuery } from '@/modules/movies/api.ts';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import styles from './SearchPage.module.css';

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const { query } = useParams<{ query: string }>();

  useEffect(() => {
    setPage(1);
  }, [query]);

  const queryParams = {
    page,
    limit: '10',
    query,
  };

  const { data: movies } = useSearchMovieQuery(queryParams);

  return (
    <section>
      <h1 className={styles.title}>Результаты поиска</h1>
      {movies && (
        <>
          <Pagination
            max={movies?.pages}
            currentPage={movies?.page}
            onChangePage={setPage}
            style={{ marginBottom: '20px' }}
          />
          <div>
            {movies.docs.map(movie => (
              <MovieInfo key={movie.id} movie={movie as Movie} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default SearchPage;
