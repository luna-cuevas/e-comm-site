import React from 'react'
import {urlFor} from '.././lib/client'

const AboutUsBlurb = ( { aboutUsBanner: { image, title, description } } ) => {
  return (
    <div className='flex flex-col md:flex-row justify-center mt-20 w-full overflow-hidden h-fit max-w-[1400px] m-auto'>
      <div className='md:w-1/2 flex justify-center'>
        <img src={urlFor(image)} alt="" className="w-auto"  />
      </div>
      <div className='md:w-1/2 px-10 py-10 text-white'>
        <h1 className='font-base md:text-2xl mb-8 uppercase'>
          {title}
        </h1>
        <p className='text-sm font-light leading-relaxed'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default AboutUsBlurb