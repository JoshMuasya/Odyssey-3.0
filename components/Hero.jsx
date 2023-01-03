import React from 'react';
import Link from 'next/link';

const Hero = ({ heading, slogan }) => {
  return (
    // Backcround 
    <div className='flex items-center justify-center h-screen mb-0 bg-fixed bg-cover custom-img'>
      {/* Overlay  */}
      <div className='absolute top-0 left-0 bottom-0 right-0 bg-black/70 z-[2] h-screen'/>

      <div className='p-10 text-white z-[2] text-center'>
          <h3 className='font-Titillium-Web italic text-s text-orange
          md:text-m'>{ slogan }</h3>
          <h2 className='font-Quicksand font-bold text-l text-white my-5
          md:text-lg'>{ heading }</h2>

          <Link href='#about'>
            <button className='px-4 py-3 border border-yellow rounded-2xl mb-5 font-bold
            hover:border-0 hover:text-yellow
            sm:mr-2.5
            md:mr-5'>About Us</button>
          </Link>

          <Link href='#contact'>
            <button className='px-4 py-3 rounded-2xl mb-5 bg-yellow text-white
            hover:bg-white hover:text-yellow font-bold
            sm:2.5
            md:ml-5'>Contact Us</button>
          </Link>
      </div>
    </div>
  )
}

export default Hero