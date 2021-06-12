import { Link } from 'react-router-dom';
// import { login } from '../../services/firebase'
import CarouselEle from '../CarouselEle/CarouselEle'
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-left">
        <div className="banner-content">

          <h2>Celebrate Clean Brighter Days</h2>
          <h3>New Limited Edition Colors</h3>
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