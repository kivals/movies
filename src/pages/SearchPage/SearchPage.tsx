import type { Movie } from '@/shared/types/movie.ts';
import MovieInfo from '@/widgets/ui/MovieInfo/MovieInfo.tsx';
import { useSearchMovieQuery } from '@/modules/movies/api.ts';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import styles from './SearchPage.module.css';
import { Pagination } from '@/shared/ui';
import { Link } from 'react-router';

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
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <MovieInfo key={movie.id} movie={movie as Movie} />
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default SearchPage;
