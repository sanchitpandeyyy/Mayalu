import React from 'react';
import slider1 from '../assets/image1.jpg'
import slider2 from '../assets/image2.jpg'

// import {Link} from 'react-scroll';
import Carousel from '../components/Carousel/Carousel';


function Home() {

  let slides = [slider2,slider1];

  return (
    <>

<div id='home' className="w-[100%] m-auto">
      <Carousel slides={slides} />
    </div>
    </>
    )
}

export default Home


