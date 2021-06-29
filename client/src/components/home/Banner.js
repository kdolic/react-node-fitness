import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../css/Banner.css';
import banner3 from "../../assets/images/fasting.jpg";
import banner2 from "../../assets/images/nutrition.jpg";
import banner1 from "../../assets/images/gym.jpg";

const Banner = () => {

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }

  return (
      <Slider className='bannerContainer' {...settings}>
        <div className='imgContainer'>
          <img src={banner1} alt='banner1' />
        </div>
        <div className='imgContainer'>
          <img src={banner2} alt='banner2' />
        </div>
        <div className='imgContainer'>
          <img src={banner3} alt='banner3' />
        </div>
      </Slider>
  );
};

export default Banner;
