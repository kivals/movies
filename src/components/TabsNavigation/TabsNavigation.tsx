import type { ITabs } from '@/components/types/types.ts';
import cn from 'classnames';

import styles from './TabsNavigation.module.css';

const tabs: ITabs[] = [
  {
    id: 1,
    name: 'Популярные фильмы',
  },
  {
    id: 2,
    name: 'Популярные сериалы',
  },
  {
    id: 3,
    name: 'Подборка фильмов',
  },
];

interface Props {
  activeTab: number;
  onChangeTab: (id: number) => void;
}

const TabsNavigation = ({ activeTab, onChangeTab }: Props) => {
  return (
    <div>
      <ul className={styles.tabs}>
        {tabs.map(({ id, name }) => (
          <li
            className={cn(styles.tab, {
              [styles.active]: activeTab === id,
            })}
            key={id}
            onClick={() => onChangeTab(id)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabsNavigation;
