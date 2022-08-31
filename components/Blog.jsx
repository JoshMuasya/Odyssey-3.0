import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <div id='blog'
    className='flex flex-col justify-around items-center h-screen p-10 align-center'
    >
        <div className='flex flex-col justify-center items-center bg-borange rounded-b-3xl'>
            <div className=''>
                <Image
                className='' 
                src="/blog.jpg" 
                alt="blogbackground" 
                width="870" height="350" />
            </div>

            <div className='text-xl text-white font-Quicksand'>
                Be Part of our Stories
            </div>
        </div>

        <div>
           <Link href='/Blogs'> 
                <button className='border-2 border-brown rounded-2xl px-4 py-3 mx-5 hover:bg-brown hover:text-white'>
                        2022
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Blog