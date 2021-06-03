import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Kelly's Nail Salon
        </header>
        <NavBar />
        <Banner />
        <Services />
      </div>
    </Router>
  );
}

export default App;
