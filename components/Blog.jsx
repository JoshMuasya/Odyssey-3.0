import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <div id='blog'
    className='flex flex-col items-center h-fit pt-0 mt-1 align-center'
    >
        <div className='flex flex-col justify-center items-center bg-borange rounded-b-3xl mb-5'>
            <div className=''>
                <Image
                className='' 
                src="/blog.jpg" 
                alt="blogbackground" 
                width="870" height="350" />
            </div>

            <div className='text-l text-white font-Quicksand text-center align-center
            lg:text-lg'>
                Be Part of our Stories
            </div>
        </div>

        <div className='m-0 pb-5'>
           <Link href='/Blogs'> 
                <button className='border-2 border-brown rounded-2xl px-4 py-3 hover:bg-brown hover:text-white'>
                        2022
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Blog