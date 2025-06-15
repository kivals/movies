import { Container } from '@/shared/ui/';
import { Outlet } from 'react-router';
import { Footer, Header } from '@/widgets/ui';

import styles from './BaseLayout.module.css';

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
