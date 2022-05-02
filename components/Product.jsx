import React from 'react'

import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: {image, name, slug, price} }) => {
  return (
    <div className='m-5'>
      <Link href={`/product/${slug.current}`}>
        <div className='ease hover:scale-110 transition-transform duration-500 scale-100 cursor-pointer'>
          <img src={urlFor(image && image[0])} width={250} height={250} className='rounded-xl bg-[#ebebeb] scale-110 transition-transform duration-500 ease' alt="" />
          <div className='flex justify-between my-5'>
            <p className='text-lg'>{name}</p>
            <h1 className='font-bold text-[#324d67] mr-4'>${price}</h1>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product