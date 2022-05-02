import React from 'react'
import  Link  from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className="p-10 md:p-24 bg-[#dcdcdc] rounded-2xl relative h-full leading-[1.3] md:leading-[0.9] w-full">
      <div>
        <p className="text-xl">{heroBanner.smallText}</p>
        <h3 className='text-[4rem] mt-1'>{heroBanner.midText}</h3>
        <h1 className='text-[100px] md:text-[10rem] -m-l-[20px] uppercase text-white'>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="absolute top-0 right-[-6%] md:right-[20%] w-[50%] md:w-[450px] md:h-[450px]"  />
        <div>
          <Link href={`/product${heroBanner.product}`}>
            <button className='rounded-xl px-4 py-3 bg-[#f02d34] text-white border-none mt-5 text-base cursor-pointer z-50 hover:bg-[#324d67]' type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner