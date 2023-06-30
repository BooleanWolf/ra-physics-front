import React from "react";
import useTitle from "../../hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./../Provider/Provider.jsx";
import { useContext, useEffect, useState } from "react";


const CourseInfo = () => {
  useTitle("CourseInfo");
  const dynamic = useLoaderData();
  const { user, logOut } = useContext(AuthContext);
  console.log(dynamic);

  const { category, course_name, fee, image, course_id } = dynamic;


  const handleCourse = (event)=> {
    event.preventDefault();
    
    const form = event.target;
    const buy_id = form.course_id.value;
    const username = form.user_name.value;
    const phone = form.phone.value;
    const bkash = form.bkash.value;
    const email = form.email.value; 

    console.log(buy_id, username, phone, bkash, email); 

    const new_request = {
      student_name: username,
      buy_id : buy_id,
      phone: phone,
      email: email, 
      bkash: bkash, 
      approved: "false"
    }

    fetch(`https://ra-physics-back.vercel.app/requests`, {
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
            title: "Sent to Ratul Bhaia",
            text: "Your request has been sent. After ratul vaia confirms your buy request, The course will be added to your inventory.",
            icon: "success",
            imageWidth: 400,
            imageHeight: 200,
          });
        }
  });


  }



  return (
    <div className="grid lg:grid-cols-2 mt-16">
      <div className="lg:mx-auto">
        <h2 className="text-2xl font-bold">Course Info</h2>
        <p>Name: {course_name}</p>
        <p>
          Price: BDT-<span>{fee}</span>
        </p>
          <p>
          Category: -<span>{category}</span>
        </p>
      </div>
      <div>
        <div>
          <div className="hero-content flex-col lg:flex-row">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h2 className="text-2xl font-semibold px-8 py-2">
                Course Buying
              </h2>
              <form onSubmit={handleCourse}>

                  <div className="card-body">
                  <div className="form-control">
                  <label className="label">
                    <span className="label-text">Course-ID</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Course Name"
                    className="input input-bordered"
                    name="course_id"
                    value={`${course_id}%%${course_name}%%${fee}`}
                    disabled
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Bkash Transaction ID</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Bkash"
                    className="input input-bordered"
                    name="bkash"
                  />
                </div>
              
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered"
                    name="phone"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered"
                    name="user_name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your email"
                    className="input input-bordered"
                    name="email"
                    value={user?.email}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                     Send For Approval
                  </button>
                </div>
              </div>
                
              </form>
            


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
