import Container from '@/components/Container/Container.tsx';

import styles from './Footer.module.css';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.logo}>kinomonster</h1>
          <ul className={styles.menu}>
            <li>
              <Link to="/" className={styles.link}>
                Главная
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.link}>
                Популярные фильмы
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.link}>
                Популярные сериалы
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
