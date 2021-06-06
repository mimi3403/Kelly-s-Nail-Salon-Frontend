import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './ContactUsPage.css'
import ContactUs from '../../components/ContactUs/ContactUs';
import Appointment from '../../components/Appointment/Appointment';

const ContactUsPage = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="content-wrapper">
        <ContactUs />
        <Appointment />
      </div>
      <Footer />
    </div>
  )
}

export default ContactUsPage;