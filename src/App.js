import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import {
  fetchAppointment,
  createAppointment,
} from './services/appointmnet-service'

function App() {
  const [appointment, setAppointment] = useState({
    appointments: [{ firstName: 'mimi', lastName: 'Hong' }],
    newAppointment: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      date: '',
      time: '',
    },
    editMode: false
  })

  useEffect(function () {
    async function getAppData() {
      const appointments = await fetchAppointment();

      setAppointment(prevState => ({
        ...prevState,
        appointments,
      }));
    }
    getAppData();
  })

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
          <Route
            path='/services'
            render={() => (
              <ServicesPage />
            )}
          />
          <Route
            path='/contactus'
            render={() => (
              <ContactUsPage />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
