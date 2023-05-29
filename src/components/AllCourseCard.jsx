import React from "react";
import { Link } from "react-router-dom";

const AllCourseCard = ({ course }) => {
  const { id, image, title, details, price } = course;

  return (
    <div>
      <div className="lg:mx-32 m-8 card lg:card-side bg-base-100 shadow-xl  my-16">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Vector </h2>
          <h2 className="card-title">{title} </h2>
          <p>{details}</p>
          <p className="absolute top-0 bg-opacity-25 right-0 bg-slate-400 rounded-sm p-1 mr-4">
            BDT-{price}
          </p>
          <div className="card-actions justify-end ">
            <Link to={`/courseInfo/${id}`}>
              <button className="btn  bg-gradient-to-r from-blue-500 to-green-300 border-none">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourseCard;
