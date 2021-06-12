import './ContactUsPage.css'
import ContactUs from '../../components/ContactUs/ContactUs';
import Navbar from '../../components/NavBar/NavBar';
import { auth } from '../../services/firebase';
import { useState, useEffect } from "react";
import {
  createAppointment,
  fetchAppointment,
  updateAppointment,
  deleteAppointment,
} from '../../services/appointment-service'


const ContactUsPage = () => {

  const [apptState, setApptState] = useState({
    appointments: [],
    newAppointment: {
      name: '',
      phoneNumber: '',
      date: '',
      time: '',
    },
    editMode: false,
  });

  const [userState, setUserState] = useState({
    user: null,
  })


  useEffect(function () {
    async function getAppData() {
      if (!userState.user) return;

      const appointments = await fetchAppointment(userState.user.uid);

      setApptState(prevState => ({
        ...prevState,
        appointments,
      }))
    }
    getAppData();
    const unsubscribe = auth.onAuthStateChanged(user => setUserState({ user }));

    return function () {
      unsubscribe();
    }
  }, [userState.user]);

  async function handleSubmit(e) {
    if (!userState.user) return;
    e.preventDefault();
    if (apptState.editMode) {
      try {
        const appointments = await updateAppointment(apptState.newAppointment, userState.user.uid);
        setApptState(prevState => ({
          ...prevState,
          appointments,
          editMode: false,
          newAppointment: {
            name: '',
            phoneNumber: '',
            date: '',
            time: '',
          }
        }))
      } catch (error) {

      }
    } else {
      try {
        const appointment = await createAppointment(apptState.newAppointment, userState.user.uid);
        setApptState({
          appointments: [...apptState.appointments, appointment],
          newAppointment: {
            name: '',
            phoneNumber: '',
            date: '',
            time: '',
          },
        });
      } catch (error) {
      }
    }
  }

  function handleChange(e) {
    setApptState(prevState => ({
      ...prevState,
      newAppointment: {
        ...prevState.newAppointment,
        [e.target.name]: e.target.value
      }
    }))
  }

  function handleEdit(id) {
    if (!userState.user) return;
    const apptToEdit = apptState.appointments.find(appointment => appointment._id === id);
    setApptState(prevState => ({
      ...prevState,
      newAppointment: apptToEdit,
      editMode: true,
    }));
  }

  async function handleDelete(id) {
    if (!userState.user) return;
    try {
      const appointments = await deleteAppointment(id, userState.user.uid);
      setApptState(prevState => ({
        ...prevState,
        appointments,
      }))
    } catch (error) {

    }
  }


  return (
    <div className="App">
      <Navbar user={userState.user} />
      <div className="content-wrapper">
        <ContactUs />
        <div className="container">
          <div className="form-wrap">
            <h1>Make An Appointment</h1>
            <hr />
            {userState.user ? apptState.appointments.map((a, i) => (
              <article key={i}>
                <p>{a.name}</p>
                <p>{a.phoneNumber}</p>
                <p>{a.date.substring(0, 10)}</p>
                <p>{a.time}</p>
                <button
                  className="controls"
                  onClick={() => handleEdit(a._id)}
                >Edit </button>
                <button
                  className="controls"
                  onClick={() => handleDelete(a._id)}
                >Delete </button>
              </article>
            )) :
              <article>No Appointments Scheduled</article>
            }
            <hr />
            <li></li>
            <form
              user={userState.user}
              onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input name="name" value={apptState.newAppointment.name} onChange={handleChange} />
              </label>
              <label>
                <span>Phone Number</span>
                <input name="phoneNumber" value={apptState.newAppointment.phoneNumber} onChange={handleChange} />
              </label>
              <label>
                <span>Date</span>
                <input name="date" type="date" value={apptState.newAppointment.date.substring(0, 10)} onChange={handleChange} />
              </label>
              <label className="time-label">
                <span>Time</span>
                <input name="time" type="time" value={apptState.newAppointment.time} onChange={handleChange} min="10:00" max="19:00" required />
              </label>
              <button disabled={!userState.user} className="btn">{apptState.editMode ? 'Edit Appointment' : 'Submit'}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage;