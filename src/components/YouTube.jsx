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
import ReactPlayer from "react-player";

const YouTube = () => {
  useTitle("YouTube");

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 400,
    responsive: [
      {
        breakpoint: 768, // mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 px-6 to-blue-400 min-h-max  ">
      <div className=" lg:mx-16 py-12">
        <h2 className="text-2xl font-semibold text-center py-12 text-white">
          YouTube Video
        </h2>
        <Slider className="" {...settings}>
          <div>
            <ReactPlayer
              volume={1}
              muted={false}
              playing={false}
              controls
              url="https://youtu.be/L6_8J-YqmJE"
              width="300px"
              height="300px"
            />
            <Link target="_blank" to="https://www.youtube.com/@Ratulphysics">
              <h2 className="text-2xl font-semibold bg-slate-200 hover:bg-blue-400 my-2 w-1/2 px-5 py-2 rounded-md">
                Go Youtube
              </h2>
            </Link>
          </div>
          <div>
            <ReactPlayer
              controls
              url="https://youtu.be/Q6upN0WgISs?list=PLPzr3Bjri7RkoA5VTNKrRy-FSZmonNbUj"
              width="300px"
              height="300px"
            />
            <Link target="_blank" to="https://www.youtube.com/@Ratulphysics">
              <h2 className="text-2xl font-semibold bg-slate-200 hover:bg-blue-400 my-2 w-1/2 px-5 py-2 rounded-md">
                Go Youtube
              </h2>
            </Link>
          </div>
          <div>
            <ReactPlayer
              controls
              url="https://youtu.be/i4bvgVKZgQ4"
              width="300px"
              height="300px"
            />
            <Link target="_blank" to="https://www.youtube.com/@Ratulphysics">
              <h2 className="text-2xl font-semibold bg-slate-200 hover:bg-blue-400 my-2 w-1/2 px-5 py-2 rounded-md">
                Go Youtube
              </h2>
            </Link>
          </div>
          <div>
            <ReactPlayer
              controls
              url="https://youtu.be/RA6ccYgN0AQ"
              width="300px"
              height="300px"
            />
            <Link target="_blank" to="https://www.youtube.com/@Ratulphysics">
              <h2 className="text-2xl font-semibold bg-slate-200 hover:bg-blue-400 my-2 w-1/2 px-5 py-2 rounded-md">
                Go Youtube
              </h2>
            </Link>
          </div>
          <div>
            <ReactPlayer
              controls
              url="https://youtu.be/pZoO3-2qfJw"
              width="300px"
              height="300px"
            />
            <Link target="_blank" to="https://www.youtube.com/@Ratulphysics">
              <h2 className="text-2xl font-semibold bg-slate-200 hover:bg-blue-400 my-2 w-1/2 px-5 py-2 rounded-md">
                Go Youtube
              </h2>
            </Link>
          </div>
          <div>
            <ReactPlayer
              controls
              url="https://youtu.be/AzUnRbv3SYI?list=PLPzr3Bjri7RmzcoXI5fxtmketjOGbyF-5"
              width="300px"
              height="300px"
            />
            <Link target="_blank" to="https://www.youtube.com/@Ratulphysics">
              <h2 className="text-2xl font-semibold bg-slate-200 hover:bg-blue-400 my-2 w-1/2 px-5 py-2 rounded-md">
                Go Youtube
              </h2>
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default YouTube;
