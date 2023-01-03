import React from 'react'
import {BiArrowToTop} from 'react-icons/bi'
import Link from 'next/link'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='bg-black flex flex-col justify-center align-center items-center p-5'>
      <Link href='/'>
        <BiArrowToTop className='text-yellow hover:text-white cursor-pointer select-none text-m
        lg:text-xl' />
      </Link>
      <h3 className='text-s text-white font-Quicksand
      lg:text-lg'>
        Tel: +254 20 521 0324
      </h3>
      <div className='p-5 flex flex-row space-x-3'>
        <BsFacebook className='text-white text-s hover:text-m hover:text-yellow duration-500
        lg:text-l lg:hover:text-lg' />
        <AiOutlineInstagram className='text-white text-s hover:text-m hover:text-yellow duration-500
        lg:text-l lg:hover:text-lg' />
        <BsLinkedin className='text-white text-s hover:text-m hover:text-yellow duration-500
        lg:text-l lg:hover:text-lg' />
      </div>
      <small className='text-white text-s
      lg:text-m'>
        Copyright © 2022 Odyssey Africa Hikes - Design: Digimatic Marketers
      </small>
    </div>
  )
}

export default Contact