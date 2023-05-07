import React from "react";
import avatar from "../assets/course (2).avif";
import useTitle from "../hooks/useTitle";

const DemoLecture = () => {
  useTitle("DemoLecture");
  return (
    <div className="mb-12">
      <div>
        <div className="bg-gradient-to-r from-blue-200 to-green-100   mb-12">
          <h2 className="text-3xl font-bold text-center py-16 lg:py-36">
            Demo Lectures
          </h2>
        </div>
        {/* card */}
        <div className="lg:mx-32 m-12 card lg:card-side bg-base-100 shadow-xl h-80 mt-16">
          <div className="card-body">
            <h2 className="card-title justify-center my-auto">
              Vector Lecture
            </h2>
          </div>
          <figure>
            <img
              className="object-cover overflow-hidden rounded-tl-xl  lg:h-80 pe-2"
              src={avatar}
              alt="Album"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default DemoLecture;
