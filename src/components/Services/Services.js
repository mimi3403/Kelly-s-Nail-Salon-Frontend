import ServiceItems from './ServiceItems';
import './Services.css';

const Services = () => {
  return (
    < div className="service-intro-wrapper" >
      <div className="intro-content-container">
        {ServiceItems.map((service, index) => {
          return (
            <div className="intro-content" key={index}>
              <img src={service.image} alt="" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          )
        })}
      </div>

    </div >
  )
}

export default Services;