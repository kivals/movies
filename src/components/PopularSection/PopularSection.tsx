import TabsNavigation from '@/components/TabsNavigation/TabsNavigation.tsx';
import { useState } from 'react';

import styles from './PopularSection.module.css';
import MoviesGrid from '@/components/MoviesGrid/MoviesGrid.tsx';

const movies = Array(8)
  .fill(0)
  .map((_, i) => ({
    id: i,
    poster: '/assets/shawshank.png',
    title: 'Побег из Шоушенка',
    year: 1994,
    rating: 9,
  }));

const PopularSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section>
      <TabsNavigation activeTab={activeTab} onChangeTab={setActiveTab} />
      <button className={styles.viewAll}>Смотреть все →</button>
      <MoviesGrid movies={movies} />
    </section>
  );
};

export default PopularSection;
