import React from "react";
import { FaDesktop, FaPenSquare, FaQuestion, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardSlides from "./CardSlider";

const Physics = () => {
  return (
    <>
      <div className="bg-indigo-500 text-white">
        <h2 className="text-center text-2xl font-semibold m-5 p-5">
          Why RA Physics?
        </h2>
        <div className="grid lg:grid-cols-4 gap-12 px-12 py-8 lg:px-32 lg:py-5 ">
          <div>
            <button className="btn btn-circle btn-outline text-white hover:bg-white hover:text-black hover:border-none">
              <FaUserPlus></FaUserPlus>
            </button>
            <h1 className="text-2xl font-bold">1.</h1>
            <p>
              <small>
                RA Physics ensures to enhance your basic in physics and
                guarantee your accuracy in any competitive exams.
              </small>
            </p>
          </div>
          <div>
            <button className="btn btn-circle btn-outline text-white hover:bg-white hover:text-black hover:border-none">
              <FaDesktop></FaDesktop>
            </button>
            <h1 className="text-2xl font-bold">2.</h1>
            <p>
              <small>
                RA Physics nurtures its students with full dedication to make
                them well prepared with more than 50+ tests and quizzes.
              </small>
            </p>
          </div>
          <div>
            <button className="btn btn-circle btn-outline text-white hover:bg-white hover:text-black hover:border-none">
              <FaQuestion></FaQuestion>
            </button>
            <h1 className="text-2xl font-bold">3.</h1>
            <p>
              <small>
                RA Physics is friendly to its students helping out all the
                students to mitigate their confusions.
              </small>
            </p>
          </div>
          <div>
            <button className="btn btn-circle btn-outline text-white hover:bg-white hover:text-black hover:border-none">
              <FaPenSquare></FaPenSquare>
            </button>
            <h1 className="text-2xl font-bold">4.</h1>
            <p>
              <small>
                RA Physics makes its students consistent in learning and achieve
                his/her ultimate success.
              </small>
            </p>
          </div>
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
