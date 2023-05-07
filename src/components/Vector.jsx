import React from "react";
import useTitle from "../hooks/useTitle";

const Vector = () => {
  useTitle("Incourse");
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-200 to-green-100  h-80 ">
        <h2 className="text-3xl font-bold text-center lg:py-36">Vector</h2>
      </div>
      <div className="grid lg:grid-cols-4 m-12 lg:mx-28 lg:my-12 gap-8">
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
      </div>
      <div className="grid lg:grid-cols-4 m-12 lg:mx-28 lg:my-12 gap-8">
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
      </div>
      <div className="grid lg:grid-cols-4 m-12 lg:mx-28 lg:my-12 gap-8">
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
      </div>
      <div className="grid lg:grid-cols-4 m-12 lg:mx-28 lg:my-12 gap-8">
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
        <h2 className="text-2xl font-semibold text-center">Lecture-1</h2>
      </div>
      {/* Lecture section end here */}
      <div>
        <h2 className="text-2xl font-bold text-center m-12">Your Progress</h2>
        <div className="ms-12">
          <p className="text-2xl font-bold">Course Completed: 80%</p>
          <p className="text-2xl font-bold">Accuracy: 97%</p>
          <p className="text-2xl font-bold">Exam Participated: 56%</p>
        </div>
      </div>
    </div>
  );
};

export default Vector;
