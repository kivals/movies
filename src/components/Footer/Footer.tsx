import Container from '@/components/Container/Container.tsx';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.logo}>kinomonster</h1>
          <ul className={styles.menu}>
            <li>
              <a href="#" className={styles.link}>
                Главная
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Популярные фильмы
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Популярные сериалы
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
