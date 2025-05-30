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
            <h1>kivals-movie проект</h1>
            <p style={{ fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              dolorum, fugiat iusto laudantium minima praesentium.
            </p>
            <IntroSection />
            <PopularSection />
          </Container>
        </main>
      </div>
    </div>
  );
}

export default App;
