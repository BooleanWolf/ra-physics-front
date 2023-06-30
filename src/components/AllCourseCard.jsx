import React from "react";
import { Link } from "react-router-dom";

const AllCourseCard = ({ course }) => {
  const { course_id, course_name , description, fee, image, category } = course;

  return (
    <div>
      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
       
          <img src={image} alt="Album"  className="object-cover overflow-hidden rounded-tl-xl  lg:h-80 pe-2"/>

        <div className="card-body">
          <h2 className="card-title">{category} </h2>
          <h2 className="card-title">{course_name} </h2>
          <p>{description}</p>
          <p className="absolute top-0 bg-opacity-25 right-0 bg-slate-400 rounded-sm p-1 mr-4">
            BDT-{fee}
          </p>
          <div className="card-actions justify-end ">
            <Link to={`/courseInfo/${course_id}`}>
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy Now
              </button>
            </Link>

             <Link to={`/demolecture/${course_id}`}>
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourseCard;
