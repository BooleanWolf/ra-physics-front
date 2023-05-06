import React from "react";
import avatar from "../assets/course.avif";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const CourseAvailable = () => {
  useTitle("CourseAvailable");
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-200 to-green-100  h-80 -mt-20">
        <h2 className="text-3xl font-bold text-center py-36">
          Courses Available
        </h2>
      </div>
      {/* card */}
      <div className="mx-32 card lg:card-side bg-base-100 shadow-xl lg:h-80 mt-16">
        <figure>
          <img className="rounded-r-lg" src={avatar} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Vector </h2>
          <p>Sign up to get full access to XYZ amount of questions library</p>
          <div className="card-actions justify-end ">
            <Link to="/courseInfo">
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAvailable;
