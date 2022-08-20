import React from 'react'

const Hero = ({ heading, slogan }) => {
  return (
    // Backcround 
    <div className='flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay  */}
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-black/70 z-[2]'/>

        <div className='p-10 text-white z-[2] text-center'>
            <h3 className='font-Titillium-Web italic text-lg text-orange'>{ slogan }</h3>
            <h2 className='font-Quicksand font-bold text-xxl text-white my-5'>{ heading }</h2>
            <button className='px-4 py-3 border border-yellow rounded-2xl mx-5 font-bold
            hover:border-0 hover:text-yellow'>About Us</button>
            <button className='px-4 py-3 rounded-2xl mx-5 bg-yellow text-white
             hover:bg-white hover:text-yellow font-bold'>Contact Us</button>
        </div>
    </div>
  )
}

export default Hero