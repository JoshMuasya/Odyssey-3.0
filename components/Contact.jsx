import React from 'react'
import {BiArrowToTop} from 'react-icons/bi'
import Link from 'next/link'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='bg-black flex flex-col justify-center align-center items-center p-10'>
      <Link href='/'>
        <BiArrowToTop size={50} className='text-yellow cursor-pointer select-none' />
      </Link>
      <h3 className='text-l text-white font-Quicksand '>
        Tel: +254 20 521 0324
      </h3>
      <div className='p-5 flex flex-row space-x-3'>
        <BsFacebook className='text-white text-m hover:text-l hover:text-yellow duration-500' />
        <AiOutlineInstagram className='text-white text-m hover:text-l hover:text-yellow duration-500' />
        <BsLinkedin className='text-white text-m hover:text-l hover:text-yellow duration-500' />
      </div>
      <small className='text-white'>
        Copyright © 2022 Odyssey Africa Hikes - Design: Digimatic Marketers
      </small>
    </div>
  )
}

export default Contact