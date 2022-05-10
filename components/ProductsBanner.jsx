import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

const ProductsBanner = ({ product: {image, name, slug, price} }) => {
  return (
    <div className='w-full p-3 m-auto text-white'>
      <Link href={`/product/${slug.current}`}>
        <div className='ease hover:scale-110 md:w-fit relative w-full m-auto transition-all duration-500 scale-100 cursor-pointer'>
          <div className='bg-black m-auto h-auto overflow-hidden md:h-[400px] md:w-[400px]'>
            <img src={urlFor(image[0])} className='opacity-50' alt="" />
          </div>
          <div className='bottom-[50px] w-fit left-[40px] absolute'>
            <p className='tracking-[0.2em] h-fit mb-8 uppercase font-bold'>~{name}~</p>
            <p><a className='px-4 py-3 font-light text-black bg-white'>View Products</a></p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductsBanner