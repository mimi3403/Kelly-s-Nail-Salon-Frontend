import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import './CarouselEle.css'

const CaroselEle = () => {
  return (
    <Carousel>
      <Carousel.Item>
        < img className='d-block w-100' src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='First slide' />
        <Carousel.Caption>
          <h3>Kelly's Nails Salon</h3>
          <p>The best place to treat your body to a New Experience!</p >
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        < img className='d-block w-100' src="https://images.pexels.com/photos/3997359/pexels-photo-3997359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='Third slide' />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        < img className='d-block w-100' src={Carousel3} alt='Second slide' />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        < img className='d-block w-100' src={Carousel4} alt='Second slide' />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        < img className='d-block w-100' src={Carousel5} alt='Second slide' />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>

  );
};

export default CaroselEle;