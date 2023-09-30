import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black py-12'>
        <div className='flex justify-center gap-4 '>
            <div className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                <FaInstagram/>
            </div>
            <div className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                <FaLinkedinIn/>
            </div>
            <div className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                <FaGithub/>
            </div>
        </div>
        <div className='flex justify-center text-grey mt-4'>
            <p>@ 2023 Copyright: Developed by Nico Flassy</p>
        </div>
    </footer>
  )
}

export default Footer