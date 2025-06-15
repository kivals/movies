import { MovieCard } from '@/entities/';
import type { Movie } from '@/shared/types/movie.ts';

import styles from './MoviesGrid.module.css';

interface Props {
  movies: Movie[];
}

const MoviesGrid = ({ movies }: Props) => {
  if (!movies.length) {
    return (
      <div className={styles.empty}>Данных нет по этому фильтру нет...</div>
    );
  }

  return (
    <div className={styles.grid}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesGrid;
