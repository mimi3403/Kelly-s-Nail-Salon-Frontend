import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-section-wrapper-contact">
        <h3>Contact Us</h3>
        <p>Contact us to get more information about any of our services </p>
        <div className="contact-number">
          <a href="tel:+17186470418">1(718)-647-0418</a>
        </div>
        <div className="contact-section-wrapper-location">
          <h3>LOCATION</h3>
          <div className="location-card">
            <h4>Kelly's Nail Salon</h4>
            <p>2962 Fulton Street</p>
            <p>Brooklyn, NY 11208</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;