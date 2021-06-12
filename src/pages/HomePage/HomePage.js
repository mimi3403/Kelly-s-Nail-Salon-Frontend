import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';
import Navbar from '../../components/NavBar/NavBar';

const HomePage = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Services />
    </div>
  )
}

export default HomePage;