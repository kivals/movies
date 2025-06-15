import cn from 'classnames';

import styles from './TabsNavigation.module.css';
import type { ContentType } from '@/shared/types/movie.ts';
import type { CSSProperties } from 'react';

const tabs: { type: ContentType; name: string }[] = [
  {
    type: 'movie',
    name: 'Популярные фильмы',
  },
  {
    type: 'tv-series',
    name: 'Популярные сериалы',
  },
  {
    type: 'anime',
    name: 'Популярное аниме',
  },
];

interface Props {
  activeTab: ContentType;
  onChangeTab: (type: ContentType) => void;
  style?: CSSProperties;
}

const TabsNavigation = ({ activeTab, onChangeTab, style }: Props) => {
  return (
    <div style={style}>
      <ul className={styles.tabs}>
        {tabs.map(({ type, name }) => (
          <li
            className={cn(styles.tab, {
              [styles.active]: activeTab === type,
            })}
            key={type}
            onClick={() => onChangeTab(type)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabsNavigation;
