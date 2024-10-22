import React from "react";
import { useParams } from "react-router-dom";
import CardWritting from "../component/CardWritting";
import DataProject from "../data/writing.json";
import { useNavigate } from "react-router-dom";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Writing = () => {
  const navigate = useNavigate();
  const handleCardClick = (index) => {
    navigate(`/writting/${index}`);
  };
  return (
    <>
      <div class="judul flex h-[100px] bg-darkgrey items-center">
        <div class="bg-red border border-white w-[60px] md:w-[200px] h-[2px] rounded-full"></div>
        <h1 class="text-white font-bold text-[30px] md:text-[40px] ms-4 md:ms-8 my-auto">
          Writing
        </h1>
        <div class="bg-red border border-white w-[60px] md:w-[200px] h-[2px] rounded-full ms-auto"></div>
      </div>
      <section
        id="writing"
        className="flex flex-col bg-darkgrey justify-center text-white pt-[50px] pb-[200px]"
      >
        <div className="max-w-[350px] md:max-w-[1200px] p-12 mx-auto flex justify-center">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="h-[500px]"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {DataProject.map((project, index) => (
              <SwiperSlide key={index}>
                <CardWritting
                  tittle={project.title}
                  image={project.image}
                  onCardClick={() => handleCardClick(index)}
                  style={{ cursor: "pointer" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Writing;
