import React, { useState } from 'react';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <header className='bg-darkgrey'>
        <nav className='flex max-w-[1200px] py-4 mx-auto p-4 bg-darkgrey'>
          <div>
            <p className='text-white font-bold' onClick={scrollToTop}>
              ncflsy
            </p>
          </div>
          <div className='ms-auto flex'>
            <ul className={`gap-8 ${isMenuOpen ? '' : 'hidden'} sm:flex text-white`}>
              <li className='cursor-pointer hover:text-pink'>
                <ScrollLink to='home' smooth={true} duration={500} >
                  Beranda
                </ScrollLink>
              </li>
              <li className='cursor-pointer hover:text-pink'>
                <ScrollLink to='design' smooth={true} duration={500}>
                  UI Design
                </ScrollLink>
              </li>
              <li className='cursor-pointer hover:text-pink'>
                <ScrollLink to='project' smooth={true} duration={500}>
                  Project
                </ScrollLink>
              </li>
              <li className='cursor-pointer hover:text-pink'>
                <ScrollLink to='pictures' smooth={true} duration={500}>
                  Pictures
                </ScrollLink>
              </li>
              <li className='cursor-pointer hover:text-pink'>
                <ScrollLink to='writing' smooth={true} duration={500}>
                  Writing
                </ScrollLink>
              </li>
            </ul>
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
