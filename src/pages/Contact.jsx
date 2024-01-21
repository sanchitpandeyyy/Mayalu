import React from "react";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#ffffff]">
        <div className="hero-content flex-col lg:flex-row-reverse lg:p-10">
          <div className="text-center lg:text-left lg:pl-20">
            <h1 className="lg:text-5xl text-4xl font-bold">Get In Touch</h1>
            <p className="py-6 text-center">
             
             <a href="" className="flex justify-around items-center w-[17rem] text-sm  "><FaFacebook /> Mayalu Driving Tours and Travel</a>
             <a href="" className="flex justify-around items-center text-sm w-[15rem]"><MdEmail/>mayaludriving@gmail.com</a>


            </p>
          </div>

          <div className="card shrink-0 shadow-2xl bg-[#f5f5f5] ">
            <form className="card-body">

              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-gray-500">Full Name</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Name"
                  className="input input-bordered bg-[#e5e5e5]"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-500">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered bg-[#e5e5e5]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-500">Message</span>
                </label>
                <textarea
                  placeholder="Your Message"
                  className="input input-bordered pt-2 bg-[#e5e5e5]"
                  required
                />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
