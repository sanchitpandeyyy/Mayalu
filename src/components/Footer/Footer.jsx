import React from 'react'
import Logo from '../../assets/logo1.png'
import { MdLocalPhone } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";
import { Link } from 'react-scroll';


const Footer = () => {
  return (
    <div>
        <footer className="footer  p-10 text-[#EAEBED] bg-[#6737c1]">
  <aside>
    <img src={Logo} alt="" className='w-20' />
    <p>Mayalu Driving Traning Center Tour and Travels<br/>Providing reliable sevices since 2067</p>
  </aside> 

  <nav>
    <header className="footer-title">Company</header> 
    <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="link link-hover">Home</Link>
    <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="link link-hover">About us</Link>
    <Link to="packages" spy={true} smooth={true} offset={-70} duration={500} className="link link-hover">Packages</Link>
    <Link to="gallery" spy={true} smooth={true} offset={-70} duration={500} className="link link-hover">Gallery</Link>
  </nav> 
  <nav>
    <header className="footer-title">Get In Contact</header> 
    <ul className="flex w-[14rem] justify-between">
    <li>
          <MdLocalPhone className=' w-5 h-5' />
        </li>
        <a href='tel:+977 9857039400'>9857039400</a>
        <li>|</li>
        <a href='tel:+977 9804429400'>9804429400</a>
    </ul>
    <ul className='flex w-[10.5rem] justify-between items-center'>
        <li>
          <FaLocationDot className=' h-[1rem]' />
        </li>
        <a target='_blank' href='https://maps.app.goo.gl/wMtvogyU9AULmPk38'>
          Butwal, Milanchowk
        </a>
      </ul>
      <ul className='flex w-[14rem] justify-between items-center'>
        <li>
          <MdEmail className=' h-[1rem] w-4' />
        </li>
        <a target='_blank' href='mailto:mayaludriving@gmail.com'>
          mayaludriving@gmail.com
        </a>
      </ul>
  </nav>
  
</footer>

<footer className="footer footer-center p-4  text-gray-300 bg-[#6737c1] border-t-2">
  <aside>
    <p>Copyright © {new Date().getFullYear()}
     - All right reserved by Mayalu Driving Traning Center Tour and Travels</p>
    <p>Design and Developed By <a className='font-bold text-white' href="https://www.facebook.com/sanchitpandeyyy/">Sanchit Pandey</a></p>
  </aside>
</footer>
    </div>
  )
}

export default Footer