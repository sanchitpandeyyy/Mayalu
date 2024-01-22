import React from 'react'
import {Link} from 'react-scroll';
import Logo from '../../assets/logo1.png'
import './Navbar.scss'


const Navbar = () => {

  

  return (
    <div id='nav' className="active navbar fixed z-50 lg:static text-[#EAEBED] bg-[#6737c1] drop-shadow-2xl">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu btn-ghost menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        </li>
      <li>  
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
      </li>
      <li>
        <Link activeClass="active" to="packages" spy={true} smooth={true} offset={-70} duration={500}>Packages</Link>
        </li>
        <li>
        <Link activeClass="active" to="gallery" spy={true} smooth={true} offset={-70} duration={500}>Gallery</Link>
        </li>
        <li>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
        </li>
      </ul>
    </div>
    <img src={Logo} alt="logo" className='lg:w-12 w-9 ' />
    <a className="btn btn-ghost text-sm lg:text-xl">Mayalu Driving</a>
  </div>
  <div className=" hidden lg:flex">
    <ul className="menu w-[85vw]  flex justify-evenly menu-horizontal  px-1">
    <li>
        <Link activeClass='active' className='hover:bg-[#a18bca]' to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
        </li>
      <li>  
      <Link activeClass="active" className='hover:bg-[#a18bca]' to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
      </li>
      <li>
        <Link activeClass="active" className='hover:bg-[#a18bca]' to="packages" spy={true} smooth={true} offset={-70} duration={500}>Packages</Link>
        </li>
        <li>
        <Link activeClass="active" className='hover:bg-[#a18bca]' to="gallery" spy={true} smooth={true} offset={-70} duration={500}>Gallery</Link>
        </li>
        <li>
        <Link activeClass="active" className='hover:bg-[#a18bca]' to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
        </li>
    </ul>
   
  </div>

</div>
  )
}

export default Navbar