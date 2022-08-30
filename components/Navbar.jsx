import React, { useState, useEffect }from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('orange')

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#ffffff70');
                setTextColor('#591D0C');
            } else {
                setColor('transparent');
                setTextColor('orange');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href='/'>
                <Image src="/WebLogo.png" alt="Logo" width="60" height="60" />
            </Link>
            <ul style= {{color:`${textColor}`}} className='hidden sm:flex'>
                <li className='p-4 font-bold'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 font-bold'>
                    <Link href='#about'>About</Link>
                </li>
                <li className='p-4 font-bold'>
                    <Link href='#gallery'>Gallery</Link>
                </li>
                <li className='p-4 font-bold'>
                    <Link href='#blog'>Blog</Link>
                </li>
                <li className='p-4 font-bold'>
                    <Link href='#contact'>Contact</Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {nav ? <AiOutlineClose size={20} style= {{color:`${textColor}`}} /> : <AiOutlineMenu size={20} style= {{color:`${textColor}`}}/>}
            </div>

            {/* Mobile Menu */}
            <div className={
                nav 
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' 
                : 
                'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' 
            }
            >
                <ul>
                    <li className='p-4 text-xxl hover:text-yellow'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4 text-xxl hover:text-yellow'>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className='p-4 text-xxl hover:text-yellow'>
                        <Link href='/gallery'>Gallery</Link>
                    </li>
                    <li className='p-4 text-xxl hover:text-yellow'>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li className='p-4 text-xxl hover:text-yellow'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar