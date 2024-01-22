import React from "react";
import car from '../assets/car.jpg';
import bike from '../assets/bike.png';
import scooter from '../assets/scooter.jpg'
import slider3 from "../assets/imag3.jpg";
import Popup from "../components/Popup/Popup";

const Packages = () => {
  return (
    <div id="packages" className="md:p-20 pt-20 bg-[#ffffff]">
      <h1 className="lg:text-5xl text-4xl font-bold text-center">
        Our Packages
      </h1>

      <div className="p-8 flex flex-col justify-between lg:flex-row items-center">
        
        <div className="card max-w-[50vw] max-h-[25rem] overflow-hidden m-10 text-black lg:w-80 bg-[#f5f5f5] shadow-xl">
          <figure>
            <img src={car} className="w-full" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title lg:text-lg text-md">Car</h2>
            <p className="lg:text-md text-sm">
              Learn to Drive Car with our Experts!
            </p>
            <div className="card-actions justify-end">
              <Popup />
            </div>
          </div>
        </div>

        <div className="card max-w-[50vw] max-h-[25rem] overflow-hidden m-10 text-black lg:w-80 bg-[#f5f5f5] shadow-xl">
          <figure>
            <img src={bike} className="w-full" alt="Bike" />
          </figure>
          <div className="card-body">
            <h2 className="card-title lg:text-lg text-md">Bike</h2>
            <p className="lg:text-md text-sm">
              Learn to Drive Bike with our Experts!
            </p>
            <div className="card-actions justify-end">
              <Popup />
            </div>
          </div>
        </div>

        <div className="card max-w-[50vw] max-h-[25rem] overflow-hidden m-10 text-black lg:w-80 bg-[#f5f5f5] shadow-xl">
          <figure>
            <img src={scooter} className="w-full" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title lg:text-lg text-md">Scooter</h2>
            <p className="lg:text-md text-sm">
              Learn to Drive Scooter with our Experts!
            </p>
            <div className="card-actions justify-end">
              <Popup />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Packages;
