import Container from '../Container/Container.tsx';
import SearchInput from '../SearchInput/SearchInput.tsx';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.logo}>kinomonster</h1>
          <SearchInput />
        </div>
      </Container>
    </header>
  );
};

export default Header;
