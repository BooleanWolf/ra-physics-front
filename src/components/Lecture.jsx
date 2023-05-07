import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const Lecture = () => {
  useTitle("CourseVideo");
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-200 to-green-100  h-80 ">
        <h2 className="text-3xl font-bold text-center py-36">
          Lecture 1 <br />
          (Course_Name)
        </h2>
      </div>
      <div className="bg-gray-200 h-96 w-2/3 mx-auto my-12">
        <span></span>
      </div>
      <p
        className="font-semibold mx-16 text-2xl
      "
      >
        Lecture 1: Introduction to Vector
      </p>
      <div className="card-actions justify-center my-12">
        <Link>
          <button className="btn bg-gradient-to-r from-blue-500 to-green-300 border-none ">
            Complete
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Lecture;
