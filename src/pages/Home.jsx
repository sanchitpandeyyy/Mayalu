import React from 'react';
import slider1 from '../assets/image1.jpg'
import {Link} from 'react-scroll';



function Home() {

  return (
    <>
<div id='home' className="hero " >
  <img src={slider1} className='min-h-screen' alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-xl">
      <h1 className="mb-5 text-5xl text-center  font-bold">MAYALU DRIVING TOURS AND TRAVEL</h1>
      <p className="mb-5">Butwal, Milanchowk</p>
      <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="btn btn-primary">Explore Us</Link>
    </div>
  </div>
</div>
    </>
    )
}

export default Home


