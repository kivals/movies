import styles from './MovieCard.module.css';
import type { Movie } from '@/shared/types/movie.ts';
import fake_poster from '@/assets/images/fake_poster.png';
import { Link } from 'react-router';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <article className={styles.movieCard}>
        <img
          src={
            movie.poster && movie.poster.url ? movie.poster.url : fake_poster
          }
          alt={movie.name}
          className={styles.poster}
        />
        <div className={styles.info}>
          <h4 className={styles.title}>{movie.name}</h4>
          <div className={styles.meta}>
            <span className={styles.year}>
              {movie.year && `${movie.year}г.`}
            </span>
            <span className={styles.rating}>
              {Number(movie.rating.kp).toFixed(1)}/10
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
