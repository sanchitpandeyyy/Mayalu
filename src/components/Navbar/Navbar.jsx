import React from 'react'
import {Link} from 'react-scroll';
import Logo from '../../assets/logo1.png'
import './Navbar.scss'


const Navbar = () => {
  return (
    <div id='nav' className=" navbar text-[#EAEBED] bg-[#6737c1] drop-shadow-2xl">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu btn-ghost menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <Link>Home</Link>
        </li>
      <li>  
      <Link>About</Link>
      </li>
      <li>
        <Link>Pakages</Link>
        </li>
        <li>
        <Link>Gallery</Link>
        </li>
        <li>
        <Link>Contact</Link>
        </li>
      </ul>
    </div>
    <img src={Logo} alt="logo" className='w-14 ' />
    <a className="btn btn-ghost text-xl">Mayalu Driving</a>
  </div>
  <div className=" hidden lg:flex">
    <ul className="menu w-[85vw] flex justify-evenly menu-horizontal  px-1">
      <li>
        <Link>Home</Link>
        </li>
      <li>  
      <Link>About</Link>
      </li>
      <li>
        <Link>Pakages</Link>
        </li>
        <li>
        <Link>Gallery</Link>
        </li>
        <li>
        <Link>Contact</Link>
        </li>
    </ul>
   
  </div>

</div>
  )
}

export default Navbar