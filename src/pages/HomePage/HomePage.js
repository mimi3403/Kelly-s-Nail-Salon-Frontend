import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Services />
      <Footer />
    </div>
  )
}

export default HomePage;