import './App.css';
import Header from './components/Header/Header.tsx';
import Container from './components/Container/Container.tsx';
import IntroSection from '@/components/IntroSection/IntroSection.tsx';
import PopularSection from '@/components/PopularSection/PopularSection.tsx';
import MoviesByCategoriesSection from '@/components/MoviesByCategoriesSection/MoviesByCategoriesSection.tsx';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <main>
          <Container>
            <IntroSection />
            <PopularSection />
            <MoviesByCategoriesSection />
            <div style={{ margin: '50px 10px' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              consequuntur culpa fuga hic in ipsum magnam odio porro?
              Accusantium alias beatae cumque cupiditate earum enim eos fuga, id
              in inventore iste molestiae nihil, numquam optio perferendis
              placeat quia quisquam saepe tenetur, ut. Delectus, eos fugit illum
              incidunt quasi ratione repudiandae tenetur ullam unde voluptates.
              Accusamus alias amet animi architecto, atque consectetur
              consequatur debitis delectus doloremque ea enim illum itaque
              magnam nisi nostrum nulla obcaecati odio possimus quod quos
              ratione reiciendis repellat reprehenderit sapiente similique sit
              unde! A accusantium culpa doloremque ea eius enim inventore ipsum
              maxime ullam? Delectus, ea veritatis.
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default App;
