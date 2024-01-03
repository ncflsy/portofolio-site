import React from "react";
import { Link } from "react-router-dom";
import TypeIt from "typeit-react";

const hero = () => {
  const downloadCV = () => {
    const cvUrl = "/file/cv-nico.pdf";
    window.open(cvUrl, "_blank");
  };
  return (
    <section
      id="home"
      className=" md:pt-[200px] pt-16 text-grey"
      style={{
        backgroundImage: `url('/img/bg-medium.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row px-4 justify-center">
        <div>
          <iframe
            src="https://embed.lottiefiles.com/animation/90921?controls=false"
            style={{
              width: "100%",
              height: "100%",
            }}
            className=""
          ></iframe>
        </div>
        <div className="max-w-[500px]">
          <h3 className="text-[20px]">Punten gaes,</h3>
          <TypeIt
            options={{
              speed: 150,
            }}
          >
            <h1 className="text-[30px] md:text-[50px] font-bold text-red inline-block relative">
              I'm Nico Flassy
            </h1>
          </TypeIt>

          <p className="text-[15px] md:text-[20px]">
            <b>Peace with the flow</b> is the key to life. We must know when to
            follow the flow, against the flow, and stay away from the flow.
          </p>
          <Link to="https://wa.me/+62859181973137">
            <button className="px-6 py-1 m-2 border border-red rounded-full mt-4 hover:bg-red hover:text-white">
              Contact
            </button>
          </Link>

          <button
            disabled
            className="px-6 py-1 m-2 rounded-full mt-4 bg-red text-white"
            onClick={downloadCV}
          >
            Download CV
          </button>
        </div>
      </div>
      <div className="triangle w-full mt-[100px]">
        <img src="/img/triangle/triangle-black.svg" alt="gambar" width={1800} />
      </div>
    </section>
  );
};

export default hero;
