import type { IMovie } from '@/components/types/types.ts';
import posterImg from '@/assets/images/shawshank.png';

import styles from './MovieCard.module.css';

const MovieCard = ({ id, poster, year, rating, title }: IMovie) => {
  return (
    <article className={styles.movieCard}>
      <img src={posterImg} alt={title} className={styles.poster} />
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.meta}>
          <span className={styles.year}>{year}г.</span>
          <span className={styles.rating}>{rating}/10</span>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
