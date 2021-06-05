import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import ContactUs from '../../components/ContactUs/ContactUs';
import Appointment from '../../components/Appointment/Appointment';

const ContactUsPage = () => {
  return (
    <div className="App">
      <NavBar />
      <ContactUs />
      <Appointment />
      <Footer />
    </div>
  )
}

export default ContactUsPage;