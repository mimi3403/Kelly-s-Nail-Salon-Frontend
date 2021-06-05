import './Appointment.css';

const Appointment = () => {
  return (
    <div className="container">
      <div className="form-wrap">
        <h1>Make An Appointment</h1>
        <form>
          <div className="form-group">
            <label for="first-name">First Name</label>
            <input type="text" name="firstName" id="first-name" />
          </div>
          <div className="form-group">
            <label for="last-name">Last Name</label>
            <input type="text" name="lastName" id="last-name" />
          </div>
          <div className="form-group">
            <label for="phone-number">Phone Number</label>
            <input type="text" name="phone-number" id="phone-number" />
          </div>
          <div className="form-group">
            <label for="appointment">Appointment Date</label>
            <input type="date" name="appt-time" id="appt-date" />
          </div>
          <div className="form-group">
            <label for="time">Appointment Time</label>
            <input type="time" name="appt-time" id="appt-time" min="10:00" max="19:00" required />
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Appointment;