import React from 'react'
import { FaBattleNet } from "react-icons/fa";

const Skill = () => {
  return (
    <>
    <div class="judul flex h-[100px] bg-black items-center">
        <div class="bg-red border border-red w-[60px] md:w-[200px] h-[2px] rounded-full"></div>
            <h1 class="text-red font-bold text-[30px] md:text-[40px] ms-4 md:ms-8 my-auto">My Skill</h1>
        <div class="bg-red border border-red w-[60px] md:w-[200px] h-[2px] rounded-full ms-auto"></div>
    </div>
    <section id='skill' className='bg-black text-white px-[50px] md:px-[200px] py-[100px]'>
        <div className='flex flex-col-reverse lg:flex-row justify-center gap-4'>
            <div className='max-w-[600px]'>
                <h1 className='text-white text-[30px] md:text-[40px] leading-[40px] md:leading-[60px]'>Information <span className='text-red'>About</span> My Skill</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique nihil culpa optio exercitationem soluta facere </p>
                <div className='flex flex-col gap-4'>
                    <div className='mt-4 flex flex-col gap-2 relative'>
                        <p>Web Development</p>
                        <div className='w-[350px] h-2 bg-white rounded-full top-8 left-0 absolute'></div>
                        <div className='w-[320px] h-2 bg-red rounded-full top-8 left-0 absolute'></div>
                    </div>
                    <div className='mt-4 flex flex-col gap-2 relative'>
                        <p>UI Design</p>
                        <div className='w-[350px] h-2 bg-white rounded-full top-8 left-0 absolute'></div>
                        <div className='w-[300px] h-2 bg-red rounded-full top-8 left-0 absolute'></div>
                    </div>
                    <div className='mt-4 flex flex-col gap-2 relative'>
                        <p>Graphic Design</p>
                        <div className='w-[350px] h-2 bg-white rounded-full top-8 left-0 absolute'></div>
                        <div className='w-[250px] h-2 bg-red rounded-full top-8 left-0 absolute'></div>
                    </div>
                    <div className='mt-4 flex flex-col gap-2 relative'>
                        <p>Web Development</p>
                        <div className='w-[350px] h-2 bg-white rounded-full top-8 left-0 absolute'></div>
                        <div className='w-[300px] h-2 bg-red rounded-full top-8 left-0 absolute'></div>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 items-center justify-center'>
                <div className='flex flex-col gap-2'>
                    <div className=' w-[150px] h-[150px] justify-center flex items-center bg-darkgrey'>
                        <FaBattleNet size={50}/>
                    </div>
                    <div className=' w-[150px] h-[150px] justify-center flex items-center bg-grey'>
                        <FaBattleNet size={50} color='black'/>
                    </div>
                </div>
                <div className='flex flex-col gap-2 pt-6'>
                    <div className=' w-[150px] h-[150px] justify-center flex items-center bg-red'>
                        <FaBattleNet size={50} color='black'/>
                    </div>
                    <div className=' w-[150px] h-[150px] justify-center flex items-center bg-darkgrey'>
                        <FaBattleNet size={50}/>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    </>
  )
}

export default Skill