import IntroSection from '@/components/IntroSection/IntroSection.tsx';
import PopularSection from '@/components/PopularSection/PopularSection.tsx';
import MoviesByCategoriesSection from '@/components/MoviesByCategoriesSection/MoviesByCategoriesSection.tsx';

const Home = () => {
  return (
    <>
      <IntroSection />
      <PopularSection />
      <MoviesByCategoriesSection />
    </>
  );
};

export default Home;
