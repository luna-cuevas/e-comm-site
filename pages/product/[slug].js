import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Product } from '../.././components/index'
import { useStateContext } from '../../context/StateContext'
import { NavBar } from '../../components'
import Carousel, { CarouselItem } from '../../components/PDP/Carousel'

const ProductDetails = ({ product, products, navData, subCategoryData }) => {
  const { decrementQty, incrementQty, qty, addToCart, setShowCart } =
    useStateContext()
  const { image, name, details, price } = product

  const handleBuyNow = () => {
    addToCart(product, qty)
    setShowCart(true)
  }

  return (
    <div
      data-testid="ProductDetails"
      className="relative mt-[80px] text-white md:mt-[100px]"
    >
      <div className="fixed top-0 z-20 h-[80px] w-screen bg-[#c6c3d6] md:h-[80px]">
        <NavBar
          textColor={'text-black'}
          navData={navData}
          subCategoryData={subCategoryData}
        />
      </div>
      {/* Mobile product image slider */}
      <div data-testid="product-image-mobile">
        <Carousel>
          {image?.map((item, i) => (
            <CarouselItem key={i}>
              <img
                key={i}
                src={urlFor(item)}
                className="m-auto bg-[#ebebeb]"
                alt="Product photo"
              />
            </CarouselItem>
          ))}
        </Carousel>
      </div>

      {/* Desktop product image list */}
      <div className="m-auto flex w-10/12 max-w-[1400px] flex-col justify-between pt-14 md:flex-row">
        <div className="md:w-1/2">
          <div
            data-testid="product-image-desktop"
            className="md:block justify-center hidden h-screen overflow-y-scroll"
          >
            {/* <img src={urlFor(image && image[index])} className='product-detail-image' alt="" /> */}
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className="m-auto mb-20 w-9/12 rounded-2xl bg-[#ebebeb]"
                // onMouseEnter={() => setIndex(i)}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className=" md:h-screen md:w-5/12 md:overflow-y-scroll top-0">
          <h1 className="ml-6 text-[18px] font-light uppercase tracking-[0.2rem] text-[#c6c3d6]">
            {name}
          </h1>
          <p className="my-4 ml-6 text-xl">${price}</p>
          <div className="flex flex-col ml-6">
            <h3 className="my-3">Quantity:</h3>
            <p className="flex w-fit items-center border-[1px] border-gray-600">
              <span
                className="ease m-auto scale-100 cursor-pointer px-5 py-3 font-extrabold text-[#ff0000] duration-300 hover:scale-110"
                onClick={decrementQty}
              >
                <AiOutlineMinus />
              </span>
              <span className="px-5">{qty}</span>
              <span
                className="m-auto cursor-pointer px-5 py-3 text-[#4cf326]"
                onClick={incrementQty}
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-around">
            <button
              type="button"
              className="ease m-auto mt-[40px] w-11/12 scale-100 cursor-pointer border-[1px] bg-[#745da7] py-[10px] px-[20px] text-white duration-500 hover:scale-110"
              onClick={() => addToCart(product, qty)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="ease m-auto mt-[10px] w-11/12 scale-100 cursor-pointer border-[1px] bg-[#9e1b20] py-[10px] px-[20px] text-white duration-500 hover:scale-110"
              onClick={() => handleBuyNow(product, qty)}
            >
              Buy Now
            </button>
          </div>

          <div className="flex flex-col gap-4 m-auto ml-6 font-light">
            <h4 className="mt-10 font-bold">Details:</h4>
            <p>{details}</p>
          </div>
        </div>
      </div>
      <div className="mt-[120px]">
        <h2 className="m-12 text-center text-[28px]">You may also like</h2>
        <div className="relative my-[60px] mx-0 h-[400px] overflow-hidden font-semibold">
          <div className=" track mt-4 flex w-[550px] justify-center">
            {products?.map((item) => (
              <Product key={item._id} product={item} />
            ))}
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
  }`
  const products = await client.fetch(query)
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`
  const productsQuery = `*[_type == "product"]`
  const product = await client.fetch(query)
  const products = await client.fetch(productsQuery)

  const navData = await client.fetch(
    '*[_type == "nav"]{title, linkUrl, navTile}'
  )
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
  `)

  return {
    props: { products, product, navData, subCategoryData },
  }
}

export default ProductDetails
