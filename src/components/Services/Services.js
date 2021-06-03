import ServiceItems from './ServiceItems';

const Services = () => {
  return (
    < div className="service-intro-wrapper" >
      <div className="service-intro-container">
        <div className="intro-content">
          {ServiceItems.map((service, index) => {
            return (
              <div key={index}>
                <img src={service.image} alt="" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>

    </div >
  )
}

export default Services;