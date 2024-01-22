import React from 'react'
import slider1 from '../assets/image1.jpg';
import slider3 from '../assets/imag3.jpg';
import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.jpg';
import img3 from '../assets/gallery3.jpg';
import img4 from '../assets/gallery4.jpg';
import img5 from '../assets/gallery5.jpg';


const Gallery = () => {


  let slides = [img1,img3,img4,img5,slider3,img2] 

  return (
    
    
    
    <div id='gallery' className='bg-[#f5f5f5] pt-10 pb-20 pl-5 pr-5 '>
      
    
        <h1 className='g:text-5xl text-4xl font-bold text-center  w-fit m-auto p-10'>Our Gallery</h1>

        <div class="grid gap-4 ">
          <img src={slider1} className="w-full h-auto rounded-lg border-8 border-white  m-2 hover:shadow-md  hover:shadow-blue-200" />
        </div>

 <div className='grid grid-cols-3 gap-4'>

  {slides.map((s) => {
          return   <div className='max-w-[40vw] max-h-[25v] overflow-hidden'>
              <img src={s} className='border-8 rounded-lg border-white w-full hover:shadow-md hover:shadow-blue-200  m-2' alt={s+1} />
          </div>
          
        })}


  </div>
  </div>


  )
}

export default Gallery