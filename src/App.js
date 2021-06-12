import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from './constants/routes.js';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
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
          {/* <Route path='/contactus' render={(props) => <ContactUsPage {...props} />}>

          </Route> */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
