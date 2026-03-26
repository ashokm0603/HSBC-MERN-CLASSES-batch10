import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1XjgU1jKPXn-U3uMsYbNIgetil4SeVJYBdrhpu0gIDDjADGBegox3UMh9kBHcuL4nR2JhjFU1Rwbxrxky1rCzG-faFR6&s&ec=121585077" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ExampleCarouselImage text="https://cdn.shopify.com/s/files/1/0070/7032/articles/ecommerce_913919fd-7392-487c-b98a-f8b6a89b8f75.jpg?v=1769807741" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833076.jpg?semt=ais_hybrid&w=740&q=80" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;