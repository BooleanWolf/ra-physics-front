import React from "react";

const Course = () => {
  return (
    <>
      <h2
        className="text-3xl font-bold text-center m-24
      "
      >
        Your Course Progress
      </h2>

      <div className="card w-80 bg-base-100 shadow-xl mt-12 mx-8">
        <figure className="h-24">
          <h2 className="font-semibold">Video Coming Soon!</h2>
        </figure>
        <div className="card-body">
          <h2 className="card-title">MRCGP (AKT)</h2>
          <p>0% Complete</p>
        </div>
      </div>
    </>
  );
};

export default Course;
