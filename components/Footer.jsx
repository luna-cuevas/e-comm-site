import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='text-center mt-5 py-[30px] px-[10px] font-bold flex flex-col gap-3 justify-center'>
      <p>2022 Audio Heaven All Rights Reserved</p>
      <p className='text-[30px] m-auto flex gap-3'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer