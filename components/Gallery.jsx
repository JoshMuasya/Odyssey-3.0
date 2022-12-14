import React, {useState} from 'react'
import Image from 'next/image'
import { GalleryData } from './GalleryData'
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'

const Gallery = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };


  return (
    <div id='gallery' 
    className='flex justify-center align-center flex-col items-center m-0 p-0'>
        <h2 className='font-Quicksand text-center text-m bg-yellow w-fit rounded-full p-1 m-5 text-white font-bold
        lg:text-lg'>
            Make Memories with Us
        </h2>
        <div className='relative flex justify-center w-fit'>
            {GalleryData.map((slide, index) => {
                return (
                    <div 
                        key={index} 
                        className={
                            index === current 
                            ? 'opacity-[1] ease-in duration-1000' 
                            : 'opacity-0'
                        }
                    >
                        <FaArrowCircleLeft onClick={prevSlide}
                        className='absolute top-[50%] left-[5px] text-yellow/70 cursor-pointer select-none z-[2] text-m
                        md:text-l
                        lg:text-xl'
                        />
                        {index === current && (
                            <Image 
                            src={slide.image} 
                            alt='/' 
                            width='1366' 
                            height='900' 
                            objectFit='cover' 
                        />
                        )}
                        <FaArrowCircleRight onClick={nextSlide}
                        className='absolute top-[50%] right-[5px] text-yellow/70 cursor-pointer select-none z-[2] text-m
                        md:text-l
                        lg:text-xl'
                        />
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default Gallery