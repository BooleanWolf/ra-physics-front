import React from "react";
import avatar from "../../assets/avatar.jpeg";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Contact = () => {
  return (
    <div className="hero min-h-max mt-24 lg:px-32">
      <div className="hero-content flex-col lg:flex-row">
        <div className="items-center lg:text-left ">
          <img className="w-full lg:w-2/3 " src={avatar} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-2xl font-semibold px-8 py-2">Contact</h2>
          <p className="px-8">
            <h3>Contact Ratul Vaia for Guidance</h3>
            <p className="py-4"><a href="https://www.facebook.com/groups/3934391209990167/?hoisted_section_header_type=recently_seen&multi_permalinks=6011737398922194"> <span className="font-bold"> Click here </span> to join "RA Physics Facebook Page"</a></p>
          </p>

          <p className="px-8 py-4">
            <span className="font-bold"> Contact </span>: 01892254939, 01765232089
          </p>

          <p className="px-8 py-4 ">
            <span className="font-bold"> Address </span>
          </p>

          <p className="px-8"> ANB Tower, Opposite Road of Nagar bhaban </p>
          <p className="px-8 py-4">Doirikhorbona, Boalia, Rajshahi, Bangladesh</p> 
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
