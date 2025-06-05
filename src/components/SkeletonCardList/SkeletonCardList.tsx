import styles from './SkeletonCardList.module.css';
import cn from 'classnames';

const SkeletonCardList = () => {
  return (
    <div className={styles.grid}>
      {[...Array(8)].map((_, index) => (
        <div
          className={cn(styles.background, styles.movieCard)}
          key={index}
        ></div>
      ))}
    </div>
  );
};

export default SkeletonCardList;
