import React from "react";
import avatar from "../assets/course (2).avif";
import useTitle from "../hooks/useTitle";
import { Link, useLoaderData } from "react-router-dom";


const DemoLecture = () => {
  useTitle("DemoLecture");
  const dynamic = useLoaderData(); 

  const { description, category, course_name, fee, image, course_id, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14 } = dynamic;
  
  return (
    <div className="mb-12">
      <div>
        <div className="bg-gradient-to-r from-blue-200 to-green-100   mb-12">
          <h2 className="text-3xl font-bold text-center py-16 lg:py-36">
            Details
          </h2>
        </div>
        {/* card */}
        <div className="lg:mx-32 m-12 card lg:card-side bg-base-100 shadow-xl h-80 mt-16">
          <div className="card-body">
            <h2 className="card-title justify-center my-auto">
              {course_name}
            </h2>
            <p>
              {description}
            </p>
          </div>
          <figure>
            <img
              className="object-cover overflow-hidden rounded-tl-xl  lg:h-80 pe-2"
              src={image}
              alt="Album"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default DemoLecture;
