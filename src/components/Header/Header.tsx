import Container from '../Container/Container.tsx';
import SearchInput from '../SearchInput/SearchInput.tsx';

import styles from './Header.module.css';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.logo}>
            <Link to="/" className={styles.link}>
              kinomonster
            </Link>
          </h1>
          <SearchInput />
        </div>
      </Container>
    </header>
  );
};

export default Header;
