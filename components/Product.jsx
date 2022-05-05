import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: {image, name, slug, price} }) => {
  return (
    <div className='md:mx-[40px] mx-[20px] my-3 text-white'>
      <Link href={`/product/${slug.current}`}>
        <div className='ease hover:scale-110 w-[200px] md:w-[250px] transition-all duration-500 scale-100 cursor-pointer'>
          <img src={urlFor(image && image[0])} className='w-[200px] bg-[#ebebeb] rounded-2xl h-[200px] md:h-[250px] md:w-[250px]' alt="" />
          <div className='md:justify-center flex flex-col w-full m-auto mt-3 text-center'>
            <p className='tracking-[0.2em] uppercase font-light'>~{name}~</p>
            <p>$ {price}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product