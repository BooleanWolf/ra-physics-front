import React from "react";
import Slider from "react-slick";

import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const CardSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div className="  py-20">
      <h2 className="text-2xl font-semibold text-center my-12 ">
        Course Video
      </h2>

      <Slider className="mx-8  text-center " {...settings}>
        <div className="p-2">
          <ReactPlayer
            controls
            url="https://youtu.be/-zj1JPQcLpg"
            width="100%"
            height=" 350px"
          />
          <Link target="_blank" to="https://www.youtube.com/@Ratulphysics">
            <h2 className="text-2xl font-semibold bg-slate-200 hover:bg-blue-400 my-2 mx-auto   px-5 py-2 rounded-md">
              Go to Youtube
            </h2>
          </Link>
        </div>
        <div className="p-2 ">
          <ReactPlayer
            controls
            url="https://youtu.be/AzUnRbv3SYI?list=PLPzr3Bjri7RmzcoXI5fxtmketjOGbyF-5"
            width="100%"
            height=" 350px"
          />
          <Link target="_blank" to="https://www.youtube.com/@Ratulphysics">
            <h2 className="text-2xl font-semibold bg-slate-200 hover:bg-blue-400 my-2   px-5 py-2 rounded-md">
              Go to Youtube
            </h2>
          </Link>
        </div>
        <div className="p-2">
          <ReactPlayer
            controls
            url="https://youtu.be/XjwlfKiX6AI"
            width="100%"
            height=" 350px"
          />
          <Link target="_blank" to="https://www.youtube.com/@Ratulphysics">
            <h2 className="text-2xl font-semibold bg-slate-200 hover:bg-blue-400 my-2   px-5 py-2 rounded-md">
              Go to Youtube
            </h2>
          </Link>
        </div>
        <div className="p-2">
          <ReactPlayer
            controls
            url="https://youtu.be/AzUnRbv3SYI?list=PLPzr3Bjri7RmzcoXI5fxtmketjOGbyF-5"
            width="100%"
            height=" 350px"
          />
          <Link target="_blank" to="https://www.youtube.com/@Ratulphysics">
            <h2 className="text-2xl font-semibold bg-slate-200 hover:bg-blue-400 my-2   px-5 py-2 rounded-md">
              Go to Youtube
            </h2>
          </Link>
        </div>
        <div className="p-2">
          <ReactPlayer
            controls
            url="https://youtu.be/MBoc2TzCSYM"
            width="100%"
            height=" 350px"
          />
          <Link target="_blank" to="https://www.youtube.com/@Ratulphysics">
            <h2 className="text-2xl font-semibold bg-slate-200 hover:bg-blue-400 my-2   px-5 py-2 rounded-md">
              Go to Youtube
            </h2>
          </Link>
        </div>
        <div className="p-2">
          <ReactPlayer
            controls
            url="https://youtu.be/MTwglTniINE"
            width="100%"
            height=" 350px"
          />
          <Link target="_blank" to="https://www.youtube.com/@Ratulphysics">
            <h2 className="text-2xl font-semibold bg-slate-200 hover:bg-blue-400 my-2   px-5 py-2 rounded-md">
              Go to Youtube
            </h2>
          </Link>
        </div>
        <div className="p-2">
          <ReactPlayer
            controls
            url="https://youtu.be/AzUnRbv3SYI?list=PLPzr3Bjri7RmzcoXI5fxtmketjOGbyF-5"
            width="100%"
            height=" 350px"
          />
          <Link target="_blank" to="https://www.youtube.com/@Ratulphysics">
            <h2 className="text-2xl font-semibold bg-slate-200 hover:bg-blue-400 my-2   px-5 py-2 rounded-md">
              Go to Youtube
            </h2>
          </Link>
        </div>
        <div className="p-2">
          <ReactPlayer
            controls
            url="https://youtu.be/AzUnRbv3SYI?list=PLPzr3Bjri7RmzcoXI5fxtmketjOGbyF-5"
            width="100%"
            height=" 350px"
          />
          <Link target="_blank" to="https://www.youtube.com/@Ratulphysics">
            <h2 className="text-2xl font-semibold bg-slate-200 hover:bg-blue-400 my-2   px-5 py-2 rounded-md">
              Go to Youtube
            </h2>
          </Link>
        </div>
        <div className="p-2">
          <ReactPlayer
            controls
            url="https://youtu.be/oqPA8apMUkw"
            width="100%"
            height=" 350px"
          />
          <Link target="_blank" to="https://www.youtube.com/@Ratulphysics">
            <h2 className="text-2xl font-semibold bg-slate-200 hover:bg-blue-400 my-2   px-5 py-2 rounded-md">
              Go to Youtube
            </h2>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default CardSlider;
