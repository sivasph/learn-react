import Header from './Header'
import MoviesSection from './MoviesSection'
import Footer from './Footer'
import Card from './Card';

function HomePage() {

  return (
    <>
      <Header />
      <MoviesSection>
        <Card />
      </MoviesSection>
      <Footer />
    </>

  );
}

export default HomePage