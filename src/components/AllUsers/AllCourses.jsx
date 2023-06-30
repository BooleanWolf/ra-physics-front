import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AllCourses = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("https://ra-physics-back.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);



  const deleting = (cid) => {
                const new_request = {
                    course_id : cid
                }
                fetch(`https://ra-physics-back.vercel.app/deleteCourse`, {
                    method: "POST",
                    headers: {
                    "content-Type": "application/json",
                    },
                    body: JSON.stringify(new_request),
                })
                .then((res) => res.json())
                .then((data) => {
                        if(data.acknowledged){
                        Swal.fire({
                            title: "Deleted",
                            text: "The Course has been deleted. Reload to see.",
                            icon: "success",
                            imageWidth: 400,
                            imageHeight: 200,
                        });

                        
                        }
                });
  }


  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">
        Total Courses: {course.length}
      </h2>
      <div className="grid lg:grid-cols-3 gap-6 ">
        {course.map((allCourse) => (
          <div className="card w-96 bg-base-100 shadow-xl mx-auto" key={allCourse._id}>
            <figure>
              <img src={allCourse.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{allCourse.course_name}</h2>
              <p>{allCourse.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/courseUpdate/${allCourse.course_id}`}>
                  <button className="btn btn-success">Update</button>
                </Link>
                <button className="btn btn-warning" onClick={()=> deleting(allCourse.course_id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;