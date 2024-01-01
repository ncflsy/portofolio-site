import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";

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
      <div className="flex justify-center text-grey mt-4 flex-col items-center">
        <p>@ 2023 Copyright: Developed by Nico Flassy</p>
        <p className="flex items-center gap-2">
          Build with <SiTailwindcss /> x
          <FaReact />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
