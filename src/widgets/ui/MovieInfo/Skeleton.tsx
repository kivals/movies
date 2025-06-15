import cn from 'classnames';
import styles from './Skeleton.module.css';

const Skeleton = () => {
  return (
    <div className={styles.container}>
      <div className={cn(styles.imageWrapper, styles.background)}></div>
      <div className={styles.content}>
        <div className={cn(styles.title, styles.background)}></div>
        <div className={cn(styles.description, styles.background)}></div>
        <div className={styles.about}>
          <div className={styles.background}></div>
          <div className={styles.background}></div>
          <div className={styles.background}></div>
          <div className={styles.background}></div>
          <div className={styles.background}></div>
          <div className={styles.background}></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
