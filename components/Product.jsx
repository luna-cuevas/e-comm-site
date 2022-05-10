import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: {image, name, slug, price} }) => {
  console.log(name)
  return (
    <div className='md:mx-[40px] mx-[10px] my-12 text-white'>
      <Link href={`/product/${slug.current}`}>
        <div className='ease hover:scale-110 w-[180px] md:h-[200px] md:w-[250px] h-[180px] transition-all duration-500 scale-100 cursor-pointer'>
          <div className='relative w-full h-full'>
            <Image layout='fill' blur objectFit='contain' priority src={urlFor(image[0])} className='bg-[#000000] rounded-2xl ' alt="" />
          </div>
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