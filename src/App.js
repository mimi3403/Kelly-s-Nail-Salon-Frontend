import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Kelly's Nail Salon
        </header>
        <Switch>
          <Route
            exact path='/'
            render={() => (
              <HomePage />
            )} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
