import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../css/Banner.css';
import banner3 from "../../assets/images/fasting.jpg";
import banner2 from "../../assets/images/goals.jpg";
import banner1 from "../../assets/images/fitness1.jpg";

const Banner = () => {

  const [showDescription, setShowDescription] = useState(false);

  const toggle = () => setShowDescription(opened => !opened);

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000
  }

  return (
      <Slider className='bannerContainer' {...settings}>
        <div className='imgContainer'>
          <img src={banner1} alt='banner1' />
          <div className='overlay'>
            <img onClick={toggle} src="https://img.icons8.com/ios-filled/50/ffffff/info.png" alt="info" />
          </div>
          {showDescription ?
          <div className='imgDescription'>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat quis tortor sit amet pulvinar. Duis et nisi efficitur, elementum lorem non, luctus tortor. Aenean pulvinar malesuada orci et mollis. Suspendisse potenti. Aenean vitae diam quis sem interdum fringilla. Pellentesque faucibus ante enim, a porttitor diam congue nec.</p>
              <button><a href='/register'>Register Now</a></button>
          </div> : null}
        </div>
        <div className='imgContainer'>
          <img src={banner2} alt='banner2' />
          <div className='overlay'>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/info.png" alt="info" />
          </div>
        </div>
        <div className='imgContainer'>
          <img src={banner3} alt='banner3' />
          <div className='overlay'>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/info.png" alt="info" />
          </div>
        </div>
      </Slider>
  );
};

export default Banner;
