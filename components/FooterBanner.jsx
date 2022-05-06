import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ( { footerBanner: { midText, product, buttonText } } ) => {
  return (
    <div className='py-[100px] px-[40px] h-[400px] bg-[#6b5d8b] rounded-2xl relative text-white w-full mt-[120px]'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>Luna's Cauldron</h1>
        </div>
        <div className='leading-[1.4]'>
          <h3 className='text-[60px] font-bold'>{midText}</h3>
          <p className='text-[18px]'>Lorem ipsum dolor sit amet.</p>
          <Link href={`/products/${product}`}>
            <button 
              type='button'
              className='hover:bg-purple-800 transition-all duration-300 rounded-2xl p-3 mt-5 bg-[#1c1b1b]'
            >
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner