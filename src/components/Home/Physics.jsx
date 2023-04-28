import React from "react";
import { FaDesktop, FaPenSquare, FaQuestion, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Physics = () => {
  return (
    <div className="bg-indigo-500 text-white">
      <h2 className="text-center text-2xl font-semibold m-5 p-5">
        Why RA Physics?
      </h2>
      <div className="grid lg:grid-cols-4 gap-12 px-12 py-8 lg:px-32 lg:py-5 ">
        <div>
          <button className="btn btn-circle btn-outline text-white">
            <FaUserPlus></FaUserPlus>
          </button>
          <h1 className="text-2xl font-bold">1.</h1>
          <p>
            <small>
              Montes vivamus curae quisque et primis pretium nullam. Congue dis
              convallis eget ipsum cubilia ante.
            </small>
          </p>
        </div>
        <div>
          <button className="btn btn-circle btn-outline text-white">
            <FaDesktop></FaDesktop>
          </button>
          <h1 className="text-2xl font-bold">2.</h1>
          <p>
            <small>Access to question bank of over 2000 questions</small>
          </p>
        </div>
        <div>
          <button className="btn btn-circle btn-outline text-white">
            <FaQuestion></FaQuestion>
          </button>
          <h1 className="text-2xl font-bold">3.</h1>
          <p>
            <small>aaaaaaaaaaaaaaaaaaaaaaaaaa</small>
          </p>
        </div>
        <div>
          <button className="btn btn-circle btn-outline text-white">
            <FaPenSquare></FaPenSquare>
          </button>
          <h1 className="text-2xl font-bold">4.</h1>
          <p>
            <small>
              compare your results with your peers' with advanced analytics
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
  );
};

export default Physics;
