import React from "react";
import { Carousel } from "react-bootstrap";
import '../../css/Banner.css';
import banner1 from "../../assets/images/fasting.jpg";
import banner2 from "../../assets/images/nutrition.jpg";
import banner3 from "../../assets/images/fitness-model.jpg";

const Banner = () => {
  return (
    <Carousel className='bannerContainer' activeIndex='0' fade >
      <Carousel.Item interval={1000}>
        <img
          className="first"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="second"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="third"
          src={banner3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
</Carousel>
  );
};

export default Banner;
