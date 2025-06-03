import './App.css';
import Header from './components/Header/Header.tsx';
import Container from './components/Container/Container.tsx';
import IntroSection from '@/components/IntroSection/IntroSection.tsx';
import PopularSection from '@/components/PopularSection/PopularSection.tsx';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <main>
          <Container>
            <IntroSection />
            <PopularSection />
          </Container>
        </main>
      </div>
    </div>
  );
}

export default App;
