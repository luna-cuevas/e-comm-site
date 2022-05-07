import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='text-center text-white mt-5 py-[30px] px-[10px] font-light flex flex-col gap-3 justify-center'>
      <p>2022 Luna's Cauldron All Rights Reserved</p>
      <p className='text-[30px] m-auto flex gap-3'>
        <Link href='/' >
          <AiFillInstagram className='cursor-pointer' />
        </Link>
        <Link href='/'>
          <AiOutlineTwitter className='cursor-pointer' />
        </Link>
        
      </p>
    </div>
  )
}

export default Footer