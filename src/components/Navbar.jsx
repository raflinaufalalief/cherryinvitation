import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import Logo from '../assets/logo.png'
import { BiMenu } from 'react-icons/bi'
import { MdImagesearchRoller, MdImage } from 'react-icons/md'
import { Link } from 'react-router-dom'
// import { NavLinks } from './NavLinks'

export const Links = [
  {
    id: 1,
    name: 'Design',
    link: '/design',
    icon: <MdImagesearchRoller />,
  },
  {
    id: 2,
    name: 'Portfolio',
    link: '/portfolio',
    icon: <MdImage />,
  },
]
/* Desktop Nav */
const DesktopNav = () => {
  return (
    <div className='w-full bg-white'>
      <div className='flex items-center justify-between px-[7rem] py-6 font-medium'>
        <div className='flex items-center'>
          <img src={Logo} alt='logo' className='md:cursor-pointer w-[75px]' />
          <h1 className='text-2xl'>Cherry Invitation</h1>
        </div>
        <ul>
          <div>
            <div className='flex'>
              <div className='flex items-center mr-6 gap-x-7'>
                {Links.map((index, id) => (
                  <li
                    key={id.id}
                    className='flex items-center cursor-pointer hover:text-secondary/95'
                  >
                    <a href={index.link}>{index.name}</a>
                  </li>
                ))}
                <div className='relative'>
                  <li
                    onClick={() => setAbout((prev) => !prev)}
                    className='relative flex items-center cursor-pointer gap-x-2'
                  >
                    <div href=''>About</div>
                    <AiOutlineDown />
                  </li>
                  <nav
                    className={`absolute flex flex-col bg-primary px-[1rem] py-[1rem] text-black/75 top-12 rounded-lg ${
                      about ? 'block' : 'hidden'
                    }`}
                  >
                    <a href=''>dkjshajdh</a>
                    <a href=''>dkjshajdh</a>
                    <a href=''>dkjshajdh</a>
                  </nav>
                </div>
              </div>
              <div className='space-x-4'>
                <button
                  type='button'
                  className='bg-secondary text-200 px-[1.4rem] rounded-full hover:bg-secondary/95 py-[.7rem]'
                >
                  SignIn
                </button>
                <button
                  type='button'
                  className=' border-2 border-secondary px-[1.4rem] text-secondary py-[.7rem] rounded-full'
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

/* Mobile Nav */
const MobileNav = () => {
  const [menu, setMenu] = useState(false)
  return (
    <div className='w-full bg-white'>
      <div className='flex items-center justify-between px-[1rem] py-6 font-medium '>
        <div className=''>
          <Link to={'/'} className='flex items-center'>
            <img src={Logo} alt='logo' className='cursor-pointer w-[48px]' />
            <h1 className='text-base font-bold'>Cherry Invitation</h1>
          </Link>
        </div>

        {/* Nav link */}
        <div className=''>
          <div className=''></div>
          <nav>
            <button
              className='relative'
              onClick={() => console.log(setMenu((prev) => !prev))}
            >
              <BiMenu fontSize={28} />
            </button>
            <ul
              className={`absolute top-24 bg-200 px-4 py-7 w-full transition-all duration-150 ease-in-out ${
                menu ? 'left-0' : 'left-[-1000px]'
              }`}
              onClick={() => setMenu((prev) => !prev)}
            >
              {Links.map((index) => (
                <li key={index.id} className='flex items-center gap-x-2'>
                  <div className='text-secondary/80'>{index.icon}</div>
                  <Link
                    className='text-base text-black/75 my-2'
                    to={index.link}
                  >
                    {index.name}
                  </Link>
                </li>
              ))}
              <hr className='mt-3' />
              <div className='mt-5'>
                <div>
                  <Link to='/sign-in'>
                    <button
                      type='button'
                      className='bg-secondary px-4 py-2 w-full rounded-full font-normal hover:bg-secondary/95 text-200'
                    >
                      Login/Register
                    </button>
                  </Link>
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
export default function Navbar() {
  return (
    <div>
      <MobileNav />
    </div>
  )
}
