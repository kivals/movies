import cn from 'classnames';
import type { CSSProperties } from 'react';

import styles from './Pagination.module.css';

interface Props {
  style?: CSSProperties;
  max?: number;
  currentPage?: number;
  onChangePage: (page: number) => void;
}

const Pagination = ({
  style,
  max = 1,
  currentPage = 1,
  onChangePage,
}: Props) => {
  return (
    <div className={styles.container} style={style}>
      <ul className={styles.list}>
        {Array.from(Array(Math.min(10, max))).map((_, index) => (
          <li key={index}>
            <button
              className={cn(styles.button, {
                [styles.active]: index + 1 === currentPage,
              })}
              onClick={() => onChangePage(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
