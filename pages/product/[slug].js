import { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import { useStateContext } from '../../context/StateContext'
import Product from '../../components/Product'

// Third Party imports
import {
  AiOutlineStar, 
  AiOutlineMinus, 
  AiOutlinePlus, 
  AiFillStar } from 'react-icons/ai'


const ProductDetails = ({ product, products }) => {
  // destructure the product and  pull out the required fields 
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0)
  // accessing functions and state from the context 
  const { decrementQty, incrementQty, qty, addToCart, setShowCart } = useStateContext()

  const handleBuyNow = () => {
    // buy now button brings up the cart for you instead of needing to click the cart icon
    addToCart(product, qty);
    setShowCart(true);
  }

  return (
    <div>
      <div className='justify-center flex gap-10 m-5 sm:m-10 mt-14 text-[#324d67] flex-wrap '>
        {/* Product image container */}
        <div>
          <div>
            {/* by setting src as image[index], the image src will update based on the current index, 
                down below the OnMouseEnter property will set the index to what the user is hovering over */}
            <img src={urlFor(image && image[index])} 
              // I split these classnames into two for readability
              className='
                w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-2xl bg-[#ebebeb] 
                cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#f02d34]' 
              alt="product image" 
            />
          </div>
          <div className='flex gap-[10px] mt-5'>
            {image?.map((item, i) => 
              (<img
                key={i} 
                src={urlFor(item)} 
                className={ i === index 
                  ? 'rounded-lg w-[70px] h-[70px] cursor-pointer selected-image bg-[#f02d34]' 
                  : 'rounded-lg bg-[#ebebeb] w-[70px] h-[70px] cursor-pointer'
                } 
                onMouseEnter={() => setIndex(i)}
                alt="" 
              />)
            )}
          </div>
        </div>
        <div>
          <h1>{name}</h1>
          <div className="text-[#f02d34] mt-2 flex gap-[5px] items-center">
            <div className='flex'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className='mt-0 text-[#324d67]'>
              (20)
            </p>
          </div>
          <h4 className='mt-2'>Details: </h4>
          <p className='mt-2'>{details}</p>
          <p className="font-bold font-[26px] mt-7 text-[#f02d34]">${price}</p>
          <div className="flex items-center gap-5 mt-2">
            <h3>Quantity:</h3>
            <p className="border-gray-50 flex p-2 mt-2 border-2">
              <span className="border-r-2 border-gray-50 text-[#f02d34] m-auto" onClick={decrementQty}><AiOutlineMinus /></span>
              <span className="border-gray-50 text-xl border-r-2">{qty}</span>
              <span className="text-[#31a831] m-auto" onClick={incrementQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="flex gap-5">
            <button 
              type="button"
              onClick={() => addToCart(product, qty)} 
              className="
                p-3 border-[1px] border-solid border-[#f02d34] mt-8 text-[18px] bg-white text-[#f02d34] 
                cursor-pointer w-[150px] md:w-[200px] scale-100 transition-transform duration-500 ease hover:scale-110" 
            >
              Add to Cart
            </button>
            <button 
              type="button" 
              onClick={() => handleBuyNow(product, qty)}
              className="
                p-3 border-[1px] border-solid border-[#f02d34] mt-8 text-[18px] bg-[#f02d34] text-white 
                cursor-pointer w-[150px] md:w-[200px] scale-100 transition-transform duration-500 ease hover:scale-110" 
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className='mt-[120px]'>
          <h2 className='text-center m-12 text-[#324d67] text-3xl'>You may also like</h2>
          <div className='relative h-[400px] w-full overflow-x-hidden'>
            <div className='flex justify-center gap-[15px] mt-5 animate-[marquee_10s_linear_infinite] md:animate-[marquee_15s_linear_infinite] w-[550%] md:w-[180%] whitespace-nowrap will-change-transform absolute hover:animate-none'>
              {products?.map((item) => (<Product key={item._id} product={item} />))}              
            </div>
          </div>
        </div>
    </div>

  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  })
  );

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == "product"]`;
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props:{ products, product }
  }
}

export default ProductDetails