import React from "react";
import slider2 from '../assets/image2.jpg'
import slider3 from '../assets/imag3.jpg'

const Packages = () => {
  return (
    <div className="p-20">
      <div className="text-3xl text-[#6737c1] font-black text-center pb-10">
        Our Packages
      </div>

      <div className="p-10  flex flex-col justify-between lg:flex-row items-center">
      <div className="card mt-10 w-96 bg-base-100 shadow-xl image-full ">
          <figure>
            <img
              src={slider3}
              alt="Car"
            />
          </figure>
          <div className="card-body hover:shadow-2xl rounded-xl">
            <h2 className="card-title">Car</h2>
            <p>Learn to Drive Car with our Experts!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View More</button>
            </div>
          </div>
        </div>

        <div className="card mt-10 w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src={slider2}
              alt="Bike"
            />
          </figure>
          <div className="card-body hover:shadow-2xl rounded-xl">
            <h2 className="card-title">Bike</h2>
            <p>Learn to Drive Bike with our Experts!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View More</button>
            </div>
          </div>
        </div>

        <div className="card mt-10 w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src={slider3}
              alt="Scooter"
            />
          </figure>
          <div className="card-body hover:shadow-2xl rounded-xl">
            <h2 className="card-title">Scooter</h2>
            <p>Learn to Drive Bike with our Experts!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View More</button>
            </div>
          </div>
        </div>

        

        


      </div>
    </div>
  );
};

export default Packages;
