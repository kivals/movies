import { Container } from '@/shared/ui/';

import styles from './Header.module.css';
import { Link } from 'react-router';
import { SearchInput } from '@/features';

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
