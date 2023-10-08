import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="flex justify-center gap-4 ">
        <a
          className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center"
          href="https://instagram.com/ncflsy"
        >
          <FaInstagram />
        </a>
        <a
          className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center"
          href="https://www.linkedin.com/in/nico-flassy-2a016a229/"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center"
          href="https://github.com/ncflsy"
        >
          <FaGithub />
        </a>
      </div>
      <div className="flex justify-center text-grey mt-4">
        <p>@ 2023 Copyright: Developed by Nico Flassy</p>
      </div>
    </footer>
  );
};

export default Footer;
