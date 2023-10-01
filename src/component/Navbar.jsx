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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className='bg-darkgrey'>
        <nav className='flex max-w-[1200px] py-4 mx-auto p-4 bg-darkgrey relative'>
          <div>
            <p className='text-white font-bold cursor-pointer' onClick={scrollToTop}>
              ncflsy
            </p>
          </div>
          <div className='ms-auto hidden sm:flex text-white gap-8'>
            <Link to='home' text='Beranda' />
            <Link to='design' text='UI Design' />
            <Link to='project' text='Project' />
            <Link to='pictures' text='Pictures' />
            <Link to='writing' text='Writing' />
          </div>
          <div className='flex sm:hidden absolute top-0 right-0 mt-4 mr-4'>
            {isMenuOpen ? (
              <FaWindowClose
                id='close-bar'
                size={25}
                onClick={toggleMenu}
                className='cursor-pointer'
                color='white'
              />
            ) : (
              <FaBars
                id='menu-bar'
                size={25}
                onClick={toggleMenu}
                className='cursor-pointer'
                color='white'
              />
            )}
          </div>
          <MobileMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
        </nav>
      </header>
    </>
  );
};

const Link = ({ to, text, onClick }) => (
  <li className='cursor-pointer hover:text-red' style={{ listStyle: 'none' }}>
    <ScrollLink to={to} smooth={true} duration={500} onClick={onClick}>
      <span style={{ textDecoration: 'none' }}>{text}</span>
    </ScrollLink>
  </li>
);

const MobileMenu = ({ isOpen, closeMenu }) => {
  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div
      className={`text-white sm:hidden fixed top-6 right-0 m-4 ${
        isOpen ? 'block' : 'hidden'
      } bg-darkgrey border border-white p-4 rounded`}
    >
      <ul className='flex flex-col items-center justify-center'>
        <Link to='home' text='Beranda' onClick={handleLinkClick} />
        <Link to='design' text='UI Design' onClick={handleLinkClick} />
        <Link to='project' text='Project' onClick={handleLinkClick} />
        <Link to='pictures' text='Pictures' onClick={handleLinkClick} />
        <Link to='writing' text='Writing' onClick={handleLinkClick} />
      </ul>
    </div>
  );
};

export default Navbar;
