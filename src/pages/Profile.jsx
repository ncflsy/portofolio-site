import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const Profile = () => {
  const handleHover = () => {
    const redDiv1 = document.getElementById("redDiv1");
    const redDiv2 = document.getElementById("redDiv2");
    if (redDiv1 && redDiv2) {
      redDiv1.classList.add("animate1");
      redDiv2.classList.add("animate2");
    }
  };

  const handleHoverOut = () => {
    const redDiv1 = document.getElementById("redDiv1");
    const redDiv2 = document.getElementById("redDiv2");
    if (redDiv1 && redDiv2) {
      redDiv1.classList.remove("animate1");
      redDiv2.classList.remove("animate2");
    }
  };
  return (
    <>
      <div class="judul flex h-[100px] bg-darkgrey items-center">
        <div class="bg-red border border-red w-[60px] md:w-[200px] h-[2px] rounded-full"></div>
        <h1 class="text-red font-bold text-[30px] md:text-[40px] ms-4 md:ms-8 my-auto">
          About Me
        </h1>
        <div class="bg-red border border-red w-[60px] md:w-[200px] h-[2px] rounded-full ms-auto"></div>
      </div>
      <section
        id="profile"
        className="bg-darkgrey text-white px-[50px] md:px-[200px] py-[100px]"
      >
        <div className="lg:flex w-full md:gap-12">
          <div className="my-auto relative">
            <img
              src="/img/profile.JPG"
              alt=""
              className="w-[450px] z-10 hover:scale-105 hover:rotate-5 transition-transform duration-300"
              onMouseOver={handleHover}
              onMouseOut={handleHoverOut}
              style={{ position: "relative" }}
            />

            <div
              id="redDiv1"
              className="border-4 border-red w-[450px] h-[200px] absolute top-0 z-1 "
            ></div>
            <div
              id="redDiv2"
              className="border-4 border-red w-[450px] h-[200px] absolute bottom-0"
            ></div>
          </div>

          <div className="max-w-[300px] md:max-w-[500px] mx-auto">
            <h1 className="text-white text-[30px] md:text-[50px] leading-[40px] md:leading-[60px]">
              Information <span className="text-red">Technology</span> Student
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              architecto voluptate accusamus modi at, rerum atque obcaecati iste
              officiis non. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nihil, praesentium.
            </p>
            <div className="flex justify-evenly mt-6">
              <ul className="flex flex-col gap-4">
                <span className="flex items-center gap-4">
                  <FaCheckCircle />
                  <li>Front End Web</li>
                </span>
                <span className="flex items-center gap-4">
                  <FaCheckCircle />
                  <li>UI/UX Design</li>
                </span>
                <span className="flex items-center gap-4">
                  <FaCheckCircle />
                  <li>Graphic Design</li>
                </span>
              </ul>
              <ul className="flex flex-col gap-4">
                <span className="flex items-center gap-4">
                  <FaCheckCircle />
                  <li>Network Administrator</li>
                </span>
                <span className="flex items-center gap-4">
                  <FaCheckCircle />
                  <li>Android View (XML)</li>
                </span>
                <span className="flex items-center gap-4">
                  <FaCheckCircle />
                  <li>Article Writting</li>
                </span>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
