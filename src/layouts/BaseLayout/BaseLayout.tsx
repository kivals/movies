import Header from '@/components/Header/Header.tsx';
import Footer from '@/components/Footer/Footer.tsx';

import styles from './BaseLayout.module.css';
import Container from '@/components/Container/Container.tsx';
import { Outlet } from 'react-router';

const BaseLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
