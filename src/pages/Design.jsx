import React from 'react'
import CardDesign from '../component/CardDesign'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const design = () => {
  return (
    <>
    <div class="judul flex h-[100px] bg-darkgrey items-center">
        <div class="bg-red border border-red w-[60px] md:w-[200px] h-[2px] rounded-full"></div>
        <h1 class="text-red font-bold text-[30px] md:text-[40px] ms-4 md:ms-8 my-auto">UI Design</h1>
        <div class="bg-red border border-red w-[60px] md:w-[200px] h-[2px] rounded-full ms-auto"></div>
    </div>
    <section className='flex bg-darkgrey justify-center text-white pt-[50px] pb-[1000px]'>
      <div className='max-w-[400px] md:max-w-[1200px]'>
          <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <CardDesign/>
          </SwiperSlide>
          <SwiperSlide>
            <CardDesign/>
          </SwiperSlide>
          <SwiperSlide>
            <CardDesign/>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    </>
  )
}

export default design