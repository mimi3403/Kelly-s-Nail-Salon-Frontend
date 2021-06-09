import './ContactUsPage.css'
import ContactUs from '../../components/ContactUs/ContactUs';
import { useState, useEffect } from "react";
import {
  createAppointment,
  fetchAppointment,
  // updateAppointment,
  // deleteAppointment,
} from '../../services/appointment-service'

const ContactUsPage = () => {

  const [apptState, setApptState] = useState({
    appointments: [{ name: 'mimi', phoneNumber: '123-456-789', date: '06/11/2021', time: '11:00pm' }],
    newAppointment: {
      name: '',
      phoneNumber: '',
      date: '',
      time: '',
    },
  })

  useEffect(function () {
    async function getAppData() {
      const appointments = await fetchAppointment();
      setApptState(prevState => ({
        ...prevState,
        appointments,
      }))
    }
    getAppData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const appointment = await createAppointment(apptState.newAppointment);

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
      console.log(error)
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
    console.log(id)
  }

  return (
    <div className="App">
      <div className="content-wrapper">
        <ContactUs />
        <div className="container">
          <div className="form-wrap">
            <h1>Make An Appointment</h1>
            <hr />
            {apptState.appointments.map((a, i) => (
              <article key={i}>
                <div>{a.name}</div>
                <div>{a.phoneNumber}</div>
                <div>{a.date}</div>
                <div>{a.time}</div>
                <div
                  className="controls"
                  onClick={() => handleEdit(a._id)}
                >{'✏️'} </div>
              </article>
            ))}
            <hr />
            <form onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input name="name" value={apptState.name} onChange={handleChange} />
              </label>
              <label>
                <span>Phone Number</span>
                <input name="phoneNumber" value={apptState.phoneNumber} onChange={handleChange} />
                <span>Date</span>
                <input name="date" type="date" value={apptState.date} onChange={handleChange} />
                <span>Time</span>
                <input name="time" type="time" value={apptState.time} onChange={handleChange} min="10:00" max="19:00" required />
              </label>
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage;