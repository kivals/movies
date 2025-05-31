import styles from './IntroSection.module.css';

import { useGetRandomMoviesQuery } from '@/modules/movies/api.ts';

const queryParams = {
  type: 'movie',
  year: '2025',
  'rating.kp': '8-10',
};

const IntroSection = () => {
  const { data, isLoading } = useGetRandomMoviesQuery(queryParams);

  if (isLoading) {
    return <div>LOADING....</div>;
  }
  return (
    <section className={styles.intro}>
      <div className={styles.content}>
        <h2 className={styles.title}>Уже в кино</h2>
        <p className={styles.subtitle}>
          {data?.name} ({data?.year})
        </p>
        <p className={styles.description}>{data?.description}</p>

        <button className={styles.button}>Смотреть</button>
      </div>
      <div className={styles.imageContent}>
        <div className={styles.wrapper}>
          <img className={styles.image} src={data?.poster.url} alt="Афиша" />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
