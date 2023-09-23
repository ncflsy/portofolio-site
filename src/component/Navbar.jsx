import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';
import { FaToggleOn } from 'react-icons/fa';
import { FaToggleOff } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isToggleOn, setIsToggleOn] = useState(true);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const toggleSwitch = () => {
      setIsToggleOn(!isToggleOn);
    };

  return (
    <>
      <header className='bg-darkgrey'>
        <nav className='flex max-w-[1200px] py-4 mx-auto p-4 bg-darkgrey'>
          <div>
            <p className='text-white font-bold'>ncflsy</p>
          </div>
          <div className='ms-auto flex'>
            
            <ul className={`gap-8 ${isMenuOpen ? '' : 'hidden'} sm:flex`}>
                <li>Beranda</li>
                <li>UI Design</li>
                <li>Project</li>
                <li>Pictures</li>
                <li>Writing</li>
            </ul>
            <div>
              {isToggleOn ? (
                <FaToggleOn
                  className='ms-auto mx-4'
                  size={25}
                  onClick={toggleSwitch}
                  color='grey'
                />
              ) : (
                <FaToggleOff
                  className='ms-auto mx-4'
                  size={25}
                  onClick={toggleSwitch}
                  color='grey'
                />
              )}
            </div>
          </div>
          <div className='flex sm:hidden'>
            <FaBars
              id='menu-bar'
              size={25}
              onClick={toggleMenu}
              className={isMenuOpen ? 'hidden' : ''}
              color='white'
            />
            <FaWindowClose
              id='close-bar'
              size={25}
              onClick={toggleMenu}
              className={!isMenuOpen ? 'hidden' : ''}
              color='white'
            />
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
