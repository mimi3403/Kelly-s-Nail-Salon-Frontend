import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from './constants/routes.js';
// import HomePage from './pages/HomePage/HomePage';
// import ServicesPage from './pages/ServicesPage/ServicesPage';
// import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
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
