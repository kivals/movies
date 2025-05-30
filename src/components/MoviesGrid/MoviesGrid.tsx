import type { IMovie } from '@/components/types/types.ts';

import MovieCard from '@/components/MovieCard/MovieCard.tsx';
import styles from './MoviesGrid.module.css';

interface Props {
  movies: IMovie[];
}

const MoviesGrid = ({ movies }: Props) => {
  return (
    <div className={styles.grid}>
      {movies.map(movie => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MoviesGrid;
