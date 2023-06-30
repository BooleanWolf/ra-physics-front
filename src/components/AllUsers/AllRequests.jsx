import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllRequests = () => {
  const [requests, setRequests] = useState([]);
  const [falseRequest, setFalseRequest] = useState([]); 

  useEffect(() => {
    fetch("https://ra-physics-back.vercel.app/requests")
      .then((res) => res.json())
      .then((data) => {
        setRequests(data);
    });
  }, []);

  const approving = (bkash, student, buy_id) => {
    const new_request = {
        bkash: bkash,
        email: student,
        buy_id: buy_id
    }
    fetch(`https://ra-physics-back.vercel.app/approve`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(new_request),
    })
    .then((res) => res.json())
    .then((data) => {
                    fetch(`https://ra-physics-back.vercel.app/userupdate`, {
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
                                                    title: "Approved",
                                                    text: "The request has been approved.",
                                                    icon: "success",
                                                    imageWidth: 400,
                                                    imageHeight: 200,
                                                });
                                     }
                            });
    });
  }
// if(data.acknowledged){
//             Swal.fire({
//                 title: "Approved",
//                 text: "The request has been approved",
//                 icon: "success",
//                 imageWidth: 400,
//                 imageHeight: 200,
//             });
//             }
  const declining = (bkash, email) => {
      const new_request = {
        bkash: bkash,
        email: email
    }
    fetch(`https://ra-physics-back.vercel.app/decline`, {
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
                text: "The request has been decline and removed. Reload to see.",
                icon: "success",
                imageWidth: 400,
                imageHeight: 200,
            });

            
            }
    });
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pending Request</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {requests.map((req) => (
          <div key={req._id} className={`${ req.approved == false  ? `bg-white` : `bg-green`} p-4 shadow-md rounded-md`}>
            <h2 className="text-xl font-bold mb-2">{req.phone}</h2>
            <p className="text-gray-500 font-bold mb-2">Transaction: {req.bkash}</p>
            <p className="text-gray-500 mb-2">Email: {req.email}</p>
            <p className="text-gray-500 font-bold mb-2">Buy ID: {req.buy_id}</p>
            <p className="text-gray-500 mb-2">Student: {req.student_name}</p>
             <p className="text-gray-500 mb-2">Approved: {req.approved}</p>
           
            {/* <input
                type="text"
                placeholder="Your email"
                className="input input-bordered"
                name="email"
                value={`Email:- ${req.email}`}
                disabled
            />
            <input
                    type="text"
                    placeholder="Your email"
                    className="input input-bordered"
                    name="buy_id"
                    value={`BUY ID:- ${req.buy_id}`}
                    disabled
                /> */}
            <button type="submit" className="btn btn-primary m-2" onClick={()=> approving(req.bkash, req.email, req.buy_id)}>
                     Approve
            </button>
            <button className="btn btn-secondary" onClick={()=> declining(req.bkash, req.email)}>
                     Delete
            </button>
          </div>
        ))}
      </div>
       {/* <h1 className="text-2xl font-bold mb-4 mt-4">Approved Request</h1> */}
    </div>
  );
};

export default AllRequests;
