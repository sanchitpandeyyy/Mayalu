import React from "react";
import slider2 from '../assets/image2.jpg'
import slider3 from '../assets/imag3.jpg'

const Packages = () => {
  return (
    <div id="packages" className="p-20 bg-[#ffffff]">
      <h1 className="lg:text-5xl text-4xl font-bold text-center">Our Packages</h1>

      <div className="p-8 flex flex-col justify-between lg:flex-row items-center">
      <div className="card max-w-[40vw] max-h-[15rem] overflow-hidden mt-10 lg:w-80 bg-base-100 shadow-xl image-full ">
          <figure>
      
            <img
              src={slider3}
              alt="Car"
              className="w-full"
            />
          </figure>
          <div className="card-body  hover:shadow-2xl rounded-xl">
            <h2 className="card-title">Car</h2>
            <p className="text-[0.7rem] md:w-auto">Learn to Drive Car with our Experts!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary md:w-auto w-[25vw] h-auto flex items-center justify-center">View More</button>
            </div>
          </div>
        </div>

        <div className="card mt-10 max-w-[40vw] max-h-[15rem] overflow-hidden lg:w-80 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src={slider3}
              alt="Bike"
              className="w-full"
            />
          </figure>
          <div className="card-body hover:shadow-2xl rounded-xl">
            <h2 className="card-title">Bike</h2>
            <p className="text-[0.7rem] md:w-auto">Learn to Drive Bike with our Experts!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary md:w-auto w-[25vw] h-auto flex items-center justify-center">View More</button>
            </div>
          </div>
        </div>

        <div className="card max-w-[40vw] max-h-[15rem] overflow-hidden mt-10  lg:w-80 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src={slider3}
              alt="Scooter"
              className="w-full"
            />
          </figure>
          <div className="card-body hover:shadow-2xl rounded-xl">
            <h2 className="card-title">Scooter</h2>
            <p className="text-[0.7rem] md:w-auto">Learn to Drive Bike with our Experts!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary md:w-auto w-[25vw] h-auto flex items-center justify-center ">View More</button>
            </div>
          </div>
        </div>

        

        


      </div>
    </div>
  );
};

export default Packages;
