import React from "react";
import useTitle from "./../hooks/useTitle";
import Slider from "react-slick";
import image from "../assets/images/raphysics.png";
import video2 from "../assets/images/video2.png";
import video3 from "../assets/images/video3.png";
import video4 from "../assets/images/video4.png";
import video5 from "../assets/images/video5.png";
import video6 from "../assets/images/video6.png";
import { Link } from "react-router-dom";

const YouTube = () => {
  useTitle("YouTube");

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="bg-gradient-to-r from-blue-200  to-blue-400 min-h-max  ">
      <div className=" lg:mx-16 py-12">
        <h2 className="text-2xl font-semibold text-center py-12 text-white">
          YouTube Video
        </h2>
        <Slider {...settings}>
          <Link target="_blank" to="https://youtu.be/i4bvgVKZgQ4">
            <img className="rounded-lg" src={image} alt="" />
          </Link>
          <Link target="_blank" to="https://youtu.be/NSCFRlFbzdI">
            <img className="rounded-lg" src={video2} alt="" />
          </Link>
          <Link target="_blank" to="https://youtu.be/RA6ccYgN0AQ">
            <img className="rounded-lg" src={video3} alt="" />
          </Link>
          <Link target="_blank" to="https://youtu.be/_U2pen2Lf9Y">
            <img className="rounded-lg" src={video4} alt="" />
          </Link>
          <Link target="_blank" to="https://youtu.be/oF_RG30XQYg">
            <img className="rounded-lg" src={video5} alt="" />
          </Link>
          <Link target="_blank" to="https://youtu.be/Hs3aZJ6uMDo">
            <img className="rounded-lg" src={video6} alt="" />
          </Link>
        </Slider>
      </div>
    </div>
  );
};

export default YouTube;
