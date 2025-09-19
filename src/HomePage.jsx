import Header from './Header'
import MoviesSection from './MoviesSection'
import Footer from './Footer'
import Card from './Card';
import Search from './Search'

function HomePage() {

  return (
    <>
      <Header />
      <Search/>
      <MoviesSection>
        <Card />
      </MoviesSection>
      <Footer />
    </>

  );
}

export default HomePage