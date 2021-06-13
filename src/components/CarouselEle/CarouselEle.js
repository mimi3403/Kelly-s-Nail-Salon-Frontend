import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import './CarouselEle.css'

const CaroselEle = () => {
  return (
    <Carousel>
      <Carousel.Item>
        < img className='d-block w-100' src="https://images.pexels.com/photos/3997384/pexels-photo-3997384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='First slide' />
      </Carousel.Item>
      <Carousel.Item>
        < img className='d-block w-100' src="https://images.pexels.com/photos/3997359/pexels-photo-3997359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='Second slide' />
      </Carousel.Item>
      <Carousel.Item>
        < img className='d-block w-100' src="https://images.pexels.com/photos/1029803/pexels-photo-1029803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='Third slide' />
      </Carousel.Item>
      <Carousel.Item>
        < img className='d-block w-100' src="https://images.pexels.com/photos/7755178/pexels-photo-7755178.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='Fourth slide' />
      </Carousel.Item>
      <Carousel.Item>
        < img className='d-block w-100' src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='Fifth slide' />
      </Carousel.Item>
    </Carousel>

  );
};

export default CaroselEle;