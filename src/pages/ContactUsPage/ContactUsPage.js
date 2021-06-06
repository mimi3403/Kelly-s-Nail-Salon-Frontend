import './ContactUsPage.css'
import ContactUs from '../../components/ContactUs/ContactUs';
import Appointment from '../../components/Appointment/Appointment';

const ContactUsPage = () => {
  return (
    <div className="App">
      <div className="content-wrapper">
        <ContactUs />
        <Appointment />
      </div>
    </div>
  )
}

export default ContactUsPage;