import React from "react";
import ImG2 from "../assets/imag3.jpg";
import "./About.css";
const about = () => {
  return (
    <div className="about p-10">
      <div className="about-left">
        {/* <div className="about-card bg"></div> */}
        <div className="about-card">
          <img src={ImG2} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="text-5xl font-bold  text-[#6737c1] pb-5">About Us</h1>
        <div className="sep">
          <p className="a-sub" data-aos="fade-left">
            <span style={{ fontWeight: "bold" }}>Mayalu Driving</span>{" "}
            Road safety is a key concern area for both the Government and the people on Nepal roads. Safe driving today requires a higher level of confidence and competence, given the poor traffic planning, increasing number of vehicles, and lack of professionalism in driving and untrained drivers on road. In a bid to address these issues, KIRTIPUR MOTOR DRIVING SCHOOL has launched Driving School its initiative for promoting safe driving.
          </p>
          <br />
          <p className="a-desc" data-aos="fade-left" data-aos-delay={200}>
          The school was the first to introduce advanced driving training simulator for better judgment and concept of route maps for holistic on-road practice.
          </p>
          <br />
          <p className="a-desc" data-aos="fade-left" data-aos-delay={300}>
          Our trained and highly competent driving instructors and staff at Mayalu Driving Center in Butwal, Milanchowk are here to help you on your journey towards learning how to drive, passing your road test and subsequently obtaining your driver license.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
