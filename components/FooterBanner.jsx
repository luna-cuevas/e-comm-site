import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ( { footerBanner: { bannerText, product, productTitle, productPrice, buttonText, image } } ) => {
  return (
    <div className='h-fit border-y-[1px] py-10 flex flex-col md:flex-row border-gray-700 relative text-white w-full md:mt-[120px]'>
        <div className='md:w-1/3 flex w-4/5 m-auto my-10'>
          <h1 className='md:text-3xl m-auto text-base font-light text-center uppercase'>{bannerText}enter into our magical world</h1>
        </div>
        <div className='leading-[1.4] flex flex-col m-auto text-center justify-center md:w-1/3'>
          <h3 className='text-[20px] mb-5 font-bold'>Product of the Month</h3>
          <img src={urlFor(image)} alt="" className="h-[300px] bg-black m-auto w-fit"  />
          {/* <img src={product.img} alt="" /> */}
          <div className='flex items-center justify-between w-[200px] m-auto'>
            <h1 className='text-[18px] my-6'>{productTitle} Headphones</h1>
            <p>{productPrice} $56</p>
          </div>
          <Link href={`/products/${product}`}>
            <button type='button' className='hover:bg-purple-800 w-[200px] m-auto transition-all duration-300 rounded-2xl p-3 bg-[#745da7]'>
              {buttonText}
            </button>
          </Link>
        </div>
    </div>
  )
}

export default FooterBanner