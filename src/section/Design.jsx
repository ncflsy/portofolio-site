import React from "react";
import CardDesign from "../component/CardDesign";
import DataDesign from "../data/design.json";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const design = () => {
  return (
    <>
      <div class="judul flex h-[100px] bg-darkgrey items-center">
        <div class="bg-red border border-white w-[60px] md:w-[200px] h-[2px] rounded-full"></div>
        <h1 class="text-white font-bold text-[30px] md:text-[40px] ms-4 md:ms-8 my-auto">
          UI Design
        </h1>
        <div class="bg-red border border-white w-[60px] md:w-[200px] h-[2px] rounded-full ms-auto"></div>
      </div>
      <section
        id="design"
        className="flex flex-col bg-darkgrey justify-center text-white pt-[50px] "
      >
        <div className="max-w-[350px] md:max-w-[1200px] mx-auto">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {DataDesign.map((design, index) => (
              <SwiperSlide>
                <CardDesign
                  key={index}
                  title={design.title}
                  desc={design.desc}
                  gambar1={design.gambar1}
                  gambar2={design.gambar2}
                  gambar3={design.gambar3}
                  gambar4={design.gambar4}
                  link={design.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="triangle w-full mt-[100px]">
          <img
            src="/img/triangle/triangle-black-flip.svg"
            alt="gambar"
            width={1800}
          />
        </div>
      </section>
    </>
  );
};

export default design;
