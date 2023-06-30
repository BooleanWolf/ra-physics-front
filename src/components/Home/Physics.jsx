import {React, useState, useEffect} from "react";
import { FaDesktop, FaPenSquare, FaQuestion, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardSlides from "./CardSlider";
import Slider from "react-slick";


const Physics = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://ra-physics-back.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>
      <div className="bg-indigo-500 ">
        <h2 className="text-center text-2xl font-semibold m-5 p-5">
          Watch our Exclusive Courses and Mercendize
        </h2>
        <div className="">
          <Slider className="mx-8  text-center " {...settings}>
          {courses.map((c)=>(
                   <div className="p-2 ">

                      <figure>
                          <img src={c.image} alt="Album" />
                      </figure>

                      <h2 className="text-xl font-semibold bg-slate-200  my-2   px-5 py-2 rounded-md">{c.course_name}</h2>
                  </div>
          ))}
          </Slider>
         
        </div>



        <div className="flex justify-center">
          <Link to="/register">
            <button className="btn btn-outline btn-info m-8 ">Start Now</button>
          </Link>
        </div>
        {/* Physics section end here */}
      </div>
      <CardSlides></CardSlides>
    </>
  );
};

export default Physics;
