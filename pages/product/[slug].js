import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import Product from '../../components/Product'
import { useState } from 'react'
import { useStateContext } from '../../context/StateContext'
import { NavBar } from '../../components'
import Carousel, { CarouselItem } from "../../components/Carousel";


const ProductDetails = ({ product, products, navData, subCategoryData }) => {
  
  const { 
    decrementQty, 
    incrementQty, 
    qty, 
    addToCart, 
    setShowCart } = useStateContext()
    
  const { image, name, details, price } = product;
  // const [ index, setIndex ] = useState(0)

  const handleBuyNow = () => {
    addToCart(product, qty);
    setShowCart(true);
  }

  return (
    <div className='mt-[80px] md:mt-[100px] relative text-white'>
      <div className='w-screen h-[80px] md:h-[80px] bg-[#c6c3d6] fixed top-0 z-20'>
        <NavBar textColor={'text-black'}  navData={navData} subCategoryData={subCategoryData} />
      </div>
      <Carousel>
        {image?.map((item, i) => 
            (<CarouselItem>
              <img
                key={i} 
                src={urlFor(item)} 
                className='bg-[#ebebeb] m-auto' 
                alt="Product photo" 
              />
            </CarouselItem>)
          )}
      </Carousel>

      <div className='flex max-w-[1400px] md:flex-row flex-col pt-14 justify-between w-10/12 m-auto'>
        <div className='md:w-1/2'>
          <div className='md:block justify-center hidden h-screen overflow-y-scroll'>
            {/* <img src={urlFor(image && image[index])} className='product-detail-image' alt="" /> */}
            
            {image?.map((item, i) => 
              (<img
                key={i} 
                src={urlFor(item)} 
                className='mb-20 rounded-2xl bg-[#ebebeb] m-auto w-9/12' 
                // onMouseEnter={() => setIndex(i)}
                alt="" 
              />)
            )}
          </div>
          {/* <div className='small-images-container'>
            {image?.map((item, i) => 
              (<img
                key={i} 
                src={urlFor(item)} 
                className={i === index ? 'small-image selected-image' : 'small-image'} 
                onMouseEnter={() => setIndex(i)}
                alt="" 
              />)
            )}
          </div> */}
        </div>
          
        <div className=" md:w-5/12 md:overflow-y-scroll md:h-screen top-0">
          <h1 className='text-[18px] text-[#c6c3d6] font-light uppercase tracking-[0.2rem]'>{name}</h1>
          <p className="my-8 ml-6 text-xl">${price}</p>
          <div className="flex flex-col ml-6">
            <h3 className='my-3'>Quantity:</h3>
            <p className="w-fit flex border-[1px] border-gray-600 items-center">
              <span className="px-5 py-3 m-auto font-extrabold text-[#ff0000] scale-100 hover:scale-110 ease cursor-pointer duration-300 cursor-pointer" onClick={decrementQty}><AiOutlineMinus /></span>
              <span className="px-5">{qty}</span>
              <span className="px-5 py-3 m-auto cursor-pointer text-[#4cf326]" onClick={incrementQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="flex flex-col justify-around">
            <button type="button" className="py-[10px] px-[20px] w-11/12 m-auto hover:scale-110 border-[1px] mt-[40px] text-white cursor-pointer scale-100 duration-500 ease bg-[#745da7]" onClick={() => addToCart(product, qty)}>Add to Cart</button>
            <button type="button" className="py-[10px] px-[20px] hover:scale-110 border-[1px] mt-[10px] text-white cursor-pointer w-11/12 m-auto scale-100 duration-500 ease bg-[#9e1b20]" onClick={() => handleBuyNow(product, qty)}>Buy Now</button>
          </div>

          <div className='flex flex-col gap-4 m-auto ml-6 font-light'>
            <h4 className='mt-10 font-bold'>Details:</h4>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea corporis ex commodi quas deserunt aperiam, magni esse tempore iste similique quos voluptas velit veritatis nihil, excepturi dolor aspernatur asperiores pariatur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste mollitia sapiente optio! Quam accusamus similique magnam beatae aut non facere ut, ipsum earum nesciunt sunt vitae optio libero, officiis impedit. Error, aliquam ab molestias esse quaerat eius illum odio consequuntur perferendis eveniet rem dolore laborum veritatis fugit sapiente inventore, dolores architecto sequi magni praesentium cupiditate numquam? Modi, asperiores sint.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste mollitia sapiente optio! Quam accusamus similique magnam beatae aut non facere ut, ipsum earum nesciunt sunt vitae optio libero, officiis impedit. Error, aliquam ab molestias esse quaerat eius illum odio consequuntur perferendis eveniet rem dolore laborum veritatis fugit sapiente inventore, dolores architecto sequi magni praesentium cupiditate numquam? Modi, asperiores sint.</p>

          </div>
          {/* We could pull product.details from Sanity but i'm going to use some lorem ipsum for demonstration purposes */}
          {/* <p>{details}</p> */}
        </div>



      </div>

      <div className='mt-[120px]'>
          <h2 className='text-center m-12 text-[28px]'>You may also like</h2>
          <div className='relative h-[400px] font-semibold my-[60px] mx-0 overflow-hidden'>
            <div className=' w-[550px] flex justify-center mt-4 track'>
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

  const navData = await client.fetch('*[_type == "nav"]{title}');
  // I would like to refactor this in the future to be more DRY.
  const subCategoryData = await client.fetch(`
    *[_type == "nav"] {
      title,
      navItem[] {
        title,
        itemAndLink {
          link[]{
            subCategory,
            navItemUrl
          }
        }
      }
    }
  `);

  return {
    props:{ products, product, navData, subCategoryData }
  }
}

export default ProductDetails