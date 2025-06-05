import './App.css';
import Header from './components/Header/Header.tsx';
import Container from './components/Container/Container.tsx';
import IntroSection from '@/components/IntroSection/IntroSection.tsx';
import PopularSection from '@/components/PopularSection/PopularSection.tsx';
import MoviesByCategoriesSection from '@/components/MoviesByCategoriesSection/MoviesByCategoriesSection.tsx';
import Footer from '@/components/Footer/Footer.tsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <IntroSection />
          <PopularSection />
          <MoviesByCategoriesSection />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
