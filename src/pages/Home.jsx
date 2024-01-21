import React from 'react';
import slider1 from '../assets/image1.jpg'



function Home() {

  return (
    <>
<div className="hero " >
  <img src={slider1} className='min-h-screen' alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">MAYALU DRIVING</h1>
      <p className="mb-5">Sick of the pedestrian life? Shift gears and learn to drive!</p>
      <button className="btn btn-primary">Explore Us</button>
    </div>
  </div>
</div>
    </>
    )
}

export default Home

