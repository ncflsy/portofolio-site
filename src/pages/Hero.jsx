import React from 'react'

const hero = () => {
  return (
    <section id='home' className=' md:pt-[200px] pt-16 text-grey'
    style={{
        backgroundImage: `url('/img/bg-medium.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className='flex flex-col md:flex-row px-4 justify-center'>
            <div>
                    <iframe
                    src="https://embed.lottiefiles.com/animation/90921?controls=false"
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    className=''
                    ></iframe>
            </div>
            <div className='max-w-[500px]'>
                    <h3 className='text-[20px]'>Punten gaes,</h3>
                    <h1 className='text-[30px] md:text-[50px] font-bold text-red'>Im Nico Flassy</h1>
                    <p className='text-[15px] md:text-[20px]'><b>Peace with the flow</b> is the key to life. We must know when to follow the flow, against the flow, and stay away from the flow.</p>
                    <button className='px-6 py-1 border border-red rounded-full mt-4 hover:bg-red hover:text-white'>Contact</button>
            </div>
        </div>
        <div className='triangle w-full mt-[100px]'>
            <img src="/img/triangle/triangle-black.svg" alt="gambar" width={1800}/>
        </div>
    </section>
    
  )
}

export default hero