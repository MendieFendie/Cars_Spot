import React from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cars1 from "../img/cars/Images-1.jpg";
import cars2 from ".././img/cars/Images-2.jpg";
import cars3 from "../img/cars/Images.jpg";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    swipeToSlide: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img className="slider-img" src={cars1} alt="Car 1" />
      </div>
      <div>
        <img className="slider-img" src={cars3} alt="Car 2" />
      </div>
      <div>
        <img className="slider-img" src={cars2} alt="Car 3" />
      </div>
    </Slider>
  );
};

export default SimpleSlider;
