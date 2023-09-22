import React from 'react'
const design = () => {
  return (
    <>
    <div class="judul flex h-[100px] bg-darkgrey items-center">
        <div class="bg-red border border-red w-[60px] md:w-[200px] h-[2px] rounded-full"></div>
        <h1 class="text-red font-bold text-[30px] md:text-[40px] ms-4 md:ms-8 my-auto">UI Design</h1>
        <div class="bg-red border border-red w-[60px] md:w-[200px] h-[2px] rounded-full ms-auto"></div>
    </div>
    <section className='flex bg-darkgrey justify-center text-white pt-[50px] pb-[1000px]'>
      <div id='card' className='flex flex-col md:flex-row bg-black shadow-2xl max-w-[800px] p-4 m-16 rounded-lg'>
        <div className='mx-auto w-[100%] md:w-[50%]'>
          <div className='flex justify-center'>
            <img src='/img/projek/simko.png' alt="gambar" className='w-[250px] md:w-[1050px]' />
          </div>
          <div className='flex max-w-[1000px] md:max-w-[500px] gap-2 mt-2 mx-auto justify-center'>
            <img src='/img/projek/simko.png' alt="gambar" className='w-[60px] md:w-[120px]' />
            <img src='/img/projek/simko.png' alt="gambar" className='w-[60px] md:w-[120px]'/>
            <img src='/img/projek/simko.png' alt="gambar" className='w-[60px] md:w-[120px]'/>
          </div>
        </div>
        <div className='text-center w-[100%] md:w-[50%] p-4'>
          <h1 className='text-[30px] font-bold text-pink'>SIMKO UI</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi atque deserunt mollitia! Ea quis quam quod eveniet recusandae praesentium explicabo? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, ea!</p>
          <button className='px-6 py-1 border border-pink hover:bg-pink hover:text-black rounded-full mt-4'>Show</button>
        </div>
      </div>
      {/* <div id='card' className='flex flex-col md:flex-row border border-bordergrey max-w-[800px] p-4 m-16 rounded-lg'>
        <div className='mx-auto w-[50%]'>
          <div>
            <img src='/img/projek/simko.png' alt="gambar" className='w-[250px] md:w-[1050px]' />
          </div>
          <div className='flex max-w-[120px] gap-2 mt-2'>
            <img src='/img/projek/simko.png' alt="gambar" className='' />
            <img src='/img/projek/simko.png' alt="gambar" className='' />
            <img src='/img/projek/simko.png' alt="gambar" className='' />
          </div>
        </div>
        <div className='text-center w-[50%] p-4'>
          <h1 className='text-[30px] font-bold text-pink'>SIMKO UI</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi atque deserunt mollitia! Ea quis quam quod eveniet recusandae praesentium explicabo? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, ea!</p>
          <button className='px-6 py-1 border border-pink hover:bg-pink hover:text-black rounded-full mt-4'>Show</button>
        </div>
      </div> */}
    </section>
    </>
  )
}

export default design