import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import logo from '../public/logo.png'

const Scholarship = () => {
  return (
    // Background
    <div className='flex items-center justify-center relative h-screen mb-0 bg-fixed bg-cover study-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-black/70 z-10 h-screen' />

        {/* Body */}
        <div className='z-20'>
            {/* Heading */}
            <h2 className='font-Quicksand text-center text-lg text-yellow mb-5'>
                Better your Life by Investing in a New Skill Abroad
            </h2>

            {/* Content */}
            <div className='flex flex-col text-center align-middle justify-center'>
                {/* Paragraph */}
                <p className='text-center text-white text-l mb-5'>
                    Get in touch with us <br />
                    We'll help you look for a favourable school abroad, <br />
                    Help you with getting your documents ready for the application, <br />
                    Help you with the application process, <br />
                    and finally help you process your visa application.<br />
                </p>

                {/* Contact Button */}
                <div className='mb-5'>
                    <Link href='#contact'>
                        <button className='px-4 py-3 rounded-2xl mb-5 bg-yellow text-white
                        hover:bg-white hover:text-yellow font-bold
                        sm:2.5
                        md:ml-5'>
                            Contact Us
                        </button>
                    </Link>
                </div>

                {/* Popup */}
                <div className='bg-white/70 rounded-xl'>
                    <h4 className='font-Quicksand text-m'>
                        Want to Study in India? <br />
                        Monad Got You <br />
                    </h4>

                    <div>
                        <Link 
                            href="https://www.monad.edu.in/"
                            target="_blank"
                        >
                            <Image 
                                src={logo}
                                alt='Monad'
                                width={400}
                                height={150}
                                className='cursor-pointer'
                            />
                        </Link>
                    </div>
                </div>

                {/* Contact Monad */}
                <div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Scholarship