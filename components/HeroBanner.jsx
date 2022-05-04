import React from 'react'
import  Link  from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className="md:ml-40 flex ml-10 text-white">
      <div className='w-fit h-fit items-end m-auto'>
        <p>Since 1642</p>
        <h1 className="text-3xl uppercase tracking-[0.2em] font-['Montserrat']">Trinkets fit for a witch</h1>
        {/* <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image"  /> */}
        <div>
          <Link href={`/products`}>
            <button type="button" className='hover:bg-purple-800 rounded-2xl p-3 mt-5 bg-orange-900'>{heroBanner.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner