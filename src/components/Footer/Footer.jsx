import React from 'react'
import Logo from '../../assets/logo1.png'
import { MdLocalPhone } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div>
        <footer className="footer  p-10 text-[#EAEBED] bg-[#6737c1]">
  <aside>
    <img src={Logo} alt="" className='w-20' />
    <p>Mayalu Driving, Tours and Travels<br/>Providing reliable sevices since 2067</p>
  </aside> 

  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Packages</a>
    <a className="link link-hover">Gallery</a>
  </nav> 
  <nav>
    <header className="footer-title">Get In Contact</header> 
    <ul className="flex w-[13rem] justify-between">
    <li>
          <MdLocalPhone className=' w-5 h-5' />
        </li>
        <a href='tel:+9841148149'>9841148149</a>
        <li>|</li>
        <a href='tel:+9847092212'>9847092212</a>
    </ul>
    <ul className='flex w-[10.5rem] justify-between items-center'>
        <li>
          <FaLocationDot className=' h-[1rem]' />
        </li>
        <a target='_blank' href='https://maps.app.goo.gl/wMtvogyU9AULmPk38'>
          Butwal, Milanchowk
        </a>
      </ul>
      <ul className='flex w-[15rem] justify-between items-center'>
        <li>
          <MdEmail className=' h-[1rem] w-4' />
        </li>
        <a target='_blank' href='mailto:sanchitpandeyyy@gmail.com'>
          sanchitpandeyyy@gmail.com
        </a>
      </ul>
  </nav>
</footer>
    </div>
  )
}

export default Footer