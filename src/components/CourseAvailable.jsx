import useTitle from "../hooks/useTitle";

import AllCourseCard from "./AllCourseCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Provider/Provider";

const CourseAvailable = () => {
  useTitle("CourseAvailable");
  // const data = useLoaderData();
  const { loading } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setData(data));
    if (loading) {
      return <progress className="progress w-56 "></progress>;
    }
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-200 to-green-100  h-80 ">
        <h2 className="text-3xl font-bold text-center py-36">
          Courses Available
        </h2>
      </div>
      {data.map((course) => (
        <AllCourseCard course={course} key={course.id}></AllCourseCard>
      ))}
    </div>
  );
};

export default CourseAvailable;
