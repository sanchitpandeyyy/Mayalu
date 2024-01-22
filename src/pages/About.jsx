import React from "react";
import ImG2 from "../assets/imag3.jpg";


const about = () => {

  let abouttxt = [
    "Mayalu Driving Road safety is a key concern area for both the Government and the people on Nepal roads. Safe driving today requires a higher level of confidence and competence, given the poor traffic planning, increasing number of vehicles, and lack of professionalism in driving and untrained drivers on road. In a bid to address these issues, KIRTIPUR MOTOR DRIVING SCHOOL has launched Driving School its initiative for promoting safe driving.",

    "The school was the first to introduce advanced driving training simulator for better judgment and concept of route maps for holistic on-road practice.",

    "Our trained and highly competent driving instructors and staff at Mayalu Driving Center in Butwal, Milanchowk are here to help you on your journey towards learning how to drive, passing your road test and subsequently obtaining your driver license.."

  ]

  return (

     
     <div id="about" className="hero pt-10 lg:p-10 bg-[#f3f3f3] min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={ImG2} className="max-w-[50vw] max-h-auto overflow-hidden rounded-lg hover:shadow-md hover:shadow-blue-400" />
    <div className="ml-10">
      <h1 className="text-4xl lg:text-5xl font-bold lg:text-left text-center">About US</h1>
      {abouttxt.map((s)=>{
        return <p className="py-6 text-sm ">{s}</p>
      })}
      
    </div>
  </div>
</div>

  );
};

export default about;
