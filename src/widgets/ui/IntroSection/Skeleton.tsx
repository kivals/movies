import styles from './Skeleton.module.css';
import cn from 'classnames';

const Skeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={cn(styles.title, styles.background)}></div>
        <div className={cn(styles.subtitle, styles.background)}></div>
        <div className={cn(styles.description, styles.background)}></div>

        <div className={cn(styles.button, styles.background)}></div>
      </div>
      <div className={cn(styles.imageContent, styles.background)}></div>
    </div>
  );
};

export default Skeleton;
