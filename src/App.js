import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from './constants/routes.js';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>Kelly's Nail Salon</header>
        <NavBar />
        <div>
          {Routes.map((v) => (
            <Route
              key={v.path}
              exact={v.isExact}
              path={v.path}
              render={() => {
                return v.component;
              }}
            />
          ))}
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
