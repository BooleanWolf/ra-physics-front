import React from "react";
import Slider from "react-slick";
import raceo from "../../assets/RaCEO.png";
import { Link } from "react-router-dom";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="  ">
      <h2 className="text-2xl font-semibold text-center my-12 ">
        Course Video
      </h2>
      <Link target="_blank" to="https://youtu.be/i4bvgVKZgQ4">
        <Slider className=" lg:mx-28" {...settings}>
          <div className="p-5 bg-blue-300 border rounded-lg  ">
            <img className="w- rounded " src={raceo} alt="" />
          </div>
          <div className="p-5 bg-blue-300 border rounded-lg ">
            <img className="w- rounded" src={raceo} alt="" />
          </div>
          <div className="p-5 bg-blue-300 border rounded-lg ">
            <img className="w- rounded" src={raceo} alt="" />
          </div>
          <div className="p-5 bg-blue-300 border rounded-lg ">
            <img className="w- rounded" src={raceo} alt="" />
          </div>
          <div className="p-5 bg-blue-300 border rounded-lg ">
            <img className="w- rounded" src={raceo} alt="" />
          </div>
          <div className="p-5 bg-blue-300 border rounded-lg ">
            <img className="w- rounded" src={raceo} alt="" />
          </div>
          <div className="p-5 bg-blue-300 border rounded-lg ">
            <img className="w- rounded" src={raceo} alt="" />
          </div>
          <div className="p-5 bg-blue-300 border rounded-lg ">
            <img className="w- rounded" src={raceo} alt="" />
          </div>
          <div className="p-5 bg-blue-300 border rounded-lg ">
            <img className="w- rounded" src={raceo} alt="" />
          </div>
        </Slider>
      </Link>
    </div>
  );
};

export default CardSlider;
