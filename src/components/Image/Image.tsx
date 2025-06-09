import styles from './styles.module.css';
import cn from 'classnames';

interface Props {
  image: string;
  classNames?: string;
}

const Image = ({ image, classNames }: Props) => {
  return (
    <div className={cn(styles.wrapper, classNames)}>
      {image ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>
  );
};

export default Image;
