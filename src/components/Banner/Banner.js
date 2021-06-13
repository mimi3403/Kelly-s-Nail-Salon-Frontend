import { Link } from 'react-router-dom';
// import { login } from '../../services/firebase'
import CarouselEle from '../CarouselEle/CarouselEle'
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-left">
        <div className="banner-content">
          <h2>Kelly's Nails Salon</h2>
          <h3>The best place to treat your body to a New Experience!</h3>
          <Link to="/contactus">
            <button className="appt-btn">Make an Appointment</button>
          </Link>
        </div>
      </div>
      <div className="banner-right">
        <CarouselEle />
      </div>
    </div>

  )
}

export default Banner;