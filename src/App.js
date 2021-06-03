import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Kelly's Nail Salon
        </header>
        <NavBar />
        <Banner />
      </div>
    </Router>
  );
}

export default App;
