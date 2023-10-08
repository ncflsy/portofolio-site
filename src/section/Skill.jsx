import React from "react";
import { FaBattleNet } from "react-icons/fa";

const Skill = () => {
  function calculatePercentage(currentWidth, totalWidth) {
    return Math.round((currentWidth / totalWidth) * 100);
  }

  return (
    <>
      <div class="judul flex h-[100px] bg-darkgrey items-center">
        <div class="bg-red border border-white w-[60px] md:w-[200px] h-[2px] rounded-full"></div>
        <h1 class="text-white font-bold text-[30px] md:text-[40px] ms-4 md:ms-8 my-auto">
          My Skill
        </h1>
        <div class="bg-red border border-white w-[60px] md:w-[200px] h-[2px] rounded-full ms-auto"></div>
      </div>
      <section id="skill" className="bg-darkgrey  text-white">
        <div className="px-[50px] md:px-[200px] py-[100px]">
          <div className="flex flex-col-reverse lg:flex-row justify-center gap-4">
            <div className="max-w-[600px]">
              <h1 className="text-white text-[30px] font-semibold md:text-[40px] leading-[40px] md:leading-[60px]">
                Information <span className="text-red">About</span> My Skill
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                similique nihil culpa optio exercitationem soluta facere{" "}
              </p>
              <div className="flex flex-col gap-4">
                <div className="mt-4 flex flex-col gap-2 relative max-w-[400px]">
                  <p>Front End Web</p>
                  <div className="w-[175px] md:w-[350px] h-2 bg-white rounded-full top-8 left-0 absolute"></div>
                  <div className="w-[160px] md:w-[320px] h-2 bg-blue rounded-full top-8 left-0 absolute"></div>
                  <span className="absolute top-6 right-0">
                    {calculatePercentage(320, 350)}%
                  </span>
                </div>
                <div className="mt-4 flex flex-col gap-2 relative max-w-[400px]">
                  <p>UI Design</p>
                  <div className="w-[175px] md:w-[350px] h-2 bg-white rounded-full top-8 left-0 absolute"></div>
                  <div className="w-[150px] md:w-[320px] h-2 bg-blue rounded-full top-8 left-0 absolute"></div>
                  <span className="absolute top-6 right-0">
                    {calculatePercentage(320, 350)}%
                  </span>
                </div>
                <div className="mt-4 flex flex-col gap-2 relative max-w-[400px]">
                  <p>Graphic Design</p>
                  <div className="w-[175px] md:w-[350px] h-2 bg-white rounded-full top-8 left-0 absolute"></div>
                  <div className="w-[125px] md:w-[290px] h-2 bg-blue rounded-full top-8 left-0 absolute"></div>
                  <span className="absolute top-6 right-0">
                    {calculatePercentage(290, 350)}%
                  </span>
                </div>
                <div className="mt-4 flex flex-col gap-2 relative max-w-[400px]">
                  <p>Java Desktop Applications</p>
                  <div className="w-[175px] md:w-[350px] h-2 bg-white rounded-full top-8 left-0 absolute"></div>
                  <div className="w-[150px] md:w-[280px] h-2 bg-blue rounded-full top-8 left-0 absolute"></div>
                  <span className="absolute top-6 right-0">
                    {calculatePercentage(280, 350)}%
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div className="flex flex-col gap-2">
                <div className=" w-[150px] h-[150px] justify-center flex items-center bg-black  ">
                  <FaBattleNet size={50} />
                </div>
                <div className=" w-[150px] h-[150px] justify-center flex items-center bg-white">
                  <FaBattleNet size={50} color="black" />
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-6">
                <div className=" w-[150px] h-[150px] justify-center flex items-center bg-white">
                  <FaBattleNet size={50} color="black" />
                </div>
                <div className=" w-[150px] h-[150px] justify-center flex items-center bg-black">
                  <FaBattleNet size={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="triangle w-full mt-[100px]">
          <img
            src="/img/triangle/triangle-black.svg"
            alt="gambar"
            width={1800}
          />
        </div>
      </section>
    </>
  );
};

export default Skill;
