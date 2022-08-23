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
    <div id='gallery' className='flex justify-center align-center flex-col items-center'>
        <h2 className='font-Quicksand text-center text-xl bg-yellow w-fit rounded-full p-5 m-5'>
            Make Memories with Us
        </h2>
        <div className='relative flex justify-center'>
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
                        className='absolute top-[50%] left-[30px] text-yellow/70 cursor-pointer select-none z-[2]'
                        size={50} />
                        {index === current && (
                            <Image 
                            src={slide.image} 
                            alt='/' 
                            width='1366' 
                            height='600' 
                            objectFit='cover' 
                        />
                        )}
                        <FaArrowCircleRight onClick={nextSlide}
                        className='absolute top-[50%] right-[30px] text-yellow/70 cursor-pointer select-none z-[2]'
                        size={50} />
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default Gallery