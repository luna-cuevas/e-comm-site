import React from 'react'
import  Link  from 'next/link'

const HeroBanner = ( { heroBanner: { tagline, aboveTagline} } ) => {
  return (
    <div className="md:ml-40 h-fit bottom-20 md:w-auto absolute flex w-10/12 ml-10 text-white">
      <div className='w-fit items-end m-auto'>
        <p>{aboveTagline}</p>
        <h1 className="text-3xl uppercase font-thin md:font-normal tracking-[0.2em]">{tagline}</h1>
        <div>
          <Link href={`/`}>
            <button type="button" className='transition-all duration-300 hover:bg-purple-800 rounded-2xl p-3 mt-5 bg-[#745da7]'>Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner