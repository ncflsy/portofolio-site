import React from 'react'

const CardDesign = () => {
  return (
    <div id='card' className='flex flex-col md:flex-row bg-black shadow-2xl max-w-[300px] md:max-w-[800px] p-4 md:py-12 md:px-8 m-16 rounded-lg mx-auto'>
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
  )
}

export default CardDesign