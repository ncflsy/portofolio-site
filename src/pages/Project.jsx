import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from '../component/CardProject';
import SearchBar from '../component/SearchBar'
import dataProject from '../data/project.json'

// Import Swiper styles
import 'swiper/css';

const project = () => {
  return (
    <>
    <div class="judul flex h-[100px] bg-black items-center">
        <div class="bg-red border border-red w-[60px] md:w-[200px] h-[2px] rounded-full"></div>
        <h1 class="text-red font-bold text-[30px] md:text-[40px] ms-4 md:ms-8 my-auto">Latest Project</h1>
        <div class="bg-red border border-red w-[60px] md:w-[200px] h-[2px] rounded-full ms-auto"></div>
    </div>
    <section id='project' className='bg-black text-white pt-12'>
        <div className='flex justify-center md:justify-end md:pe-8 md:pb-16 py-8'>
            <SearchBar/>
        </div>
        <div id='container-card' className='flex max-w-[1200px] flex-wrap gap-10 justify-center mx-auto'>
            {dataProject.map((project, index) => (
                <ProjectCard
                key={index}
                imageUrl={project.imageUrl}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                technologies={project.technologies}
                />
            ))}
            
        </div>
    </section>
    </>
    
  )
}

export default project