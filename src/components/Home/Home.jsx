import React from "react";
import banner from "../../assets/banner.jpg";
import Physics from "./Physics";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div className="mb-16">
      <div className="lg:mx-20">
        <img className="min-h-full w-full relative  " src={banner} alt="" />
      </div>

      <Link className="flex justify-center" to="/register">
        <button className="btn btn-info lg:-mt-24 absolute opacity-50 mt-4">
          Join now
        </button>
      </Link>

      {/* banner end here */}

      <div className="">
        <h2 className="text-2xl font-semibold text-center mt-24">
          Our Success
        </h2>
        <div className="grid   gap-5 lg:grid-cols-5 text-center lg:px-40 lg:py-8">
          <div>
            <h1 className="text-2xl font-bold">15K+</h1>
            <p>
              <small>Number of students</small>
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">75%</h1>
            <p>
              <small>Percentage of success</small>
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">35</h1>
            <p>
              <small>Numbers of questions</small>
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">25+</h1>
            <p>
              <small>Number of experts</small>
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">15K+</h1>
            <p>
              <small>Number of students</small>
            </p>
          </div>
        </div>
      </div>
      {/* Physics section end here */}
      <Physics></Physics>
      <Contact></Contact>
    </div>
  );
};

export default Home;
