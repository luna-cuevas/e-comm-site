import React from 'react'
import urlFor from '.././lib/client'

const AboutUsBlurb = ( { aboutUsImg, aboutUsTitle, aboutUsDesc } ) => {
  return (
    <div className='flex flex-col md:flex-row justify-center mt-20 w-full overflow-hidden h-fit max-w-[1400px] m-auto'>
      <div className='md:w-1/2 flex justify-center'>
        {/* <img src={urlFor(aboutUsImg)} alt="" className="w-auto"  /> */}
        <img className=' w-auto'  src="/about-image.jpg" alt="" />
      </div>
      <div className='md:w-1/2 px-10 py-10 text-white'>
        <h1 className='font-base md:text-2xl mb-8 uppercase'>
          {aboutUsTitle}
          Welcome to the magical world of Luna's Cauldron Shop
        </h1>
        <p className='text-sm font-light leading-relaxed'>
          {aboutUsDesc}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, nulla.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, voluptates accusamus sed sequi molestiae provident soluta quos facilis hic ea explicabo dicta illo laborum, corporis reiciendis culpa quas exercitationem quaerat magnam eveniet quidem. Atque quibusdam alias, minus debitis, laudantium assumenda quisquam a consequuntur consectetur, neque dicta ipsa voluptates nesciunt possimus.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo alias voluptatum, dolorum quam tempora numquam cupiditate in eius nulla?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque aliquid blanditiis similique a eligendi dignissimos, ut beatae animi corrupti reiciendis velit alias sit mollitia excepturi? Deserunt, porro est pariatur totam quis ullam? Nisi numquam natus soluta dolor assumenda vitae, ullam veritatis iste quisquam exercitationem omnis ab, eum similique perspiciatis architecto consectetur neque atque ducimus nihil dolorum obcaecati adipisci vero. Iure, maxime doloribus, provident omnis nulla sequi eius expedita quidem ipsa quae a impedit repudiandae quasi odit quaerat inventore fugit.
        </p>
      </div>
    </div>
  )
}

export default AboutUsBlurb