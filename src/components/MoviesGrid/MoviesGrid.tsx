import MovieCard from '@/components/MovieCard/MovieCard.tsx';
import styles from './MoviesGrid.module.css';
import type { Movie } from '@/shared/types/movie.ts';

interface Props {
  movies: Movie[];
}

const MoviesGrid = ({ movies }: Props) => {
  return (
    <div className={styles.grid}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesGrid;
