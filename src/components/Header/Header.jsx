import React from 'react';
import './Header.scss';
import { MdLocalPhone } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const Header = () => {
  return (
    <div className='main-container'>
      <p>Sick of the pedestrian life? Shift gears and learn to drive!</p>

      <ul className='phone'>
        <li>
          <MdLocalPhone className=' w-5 h-5' />
        </li>
        <a href='tel:+977 9857039400'>9857039400</a>
        <li>|</li>
        <a href='tel:+977 9804429400'>9804429400</a>
      </ul>

      <ul className='location'>
        <li>
          <FaLocationDot className=' h-5' />
        </li>
        <a target='_blank' href='https://maps.app.goo.gl/wMtvogyU9AULmPk38'>
          Butwal, Milanchowk
        </a>
      </ul>
    </div>
  );
};

export default Header;
