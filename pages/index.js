import Image from 'next/image'
import Link from 'next/link'
import {
  Product,
  FooterBanner,
  HeroBanner,
  NavBar,
  ProductsBanner,
  AboutUsBlurb,
} from '../components/index'
import { client, urlFor } from '../lib/client'

const Home = ({
  products,
  heroBanner,
  aboutUsBanner,
  footerBanner,
  navData,
  subCategoryData,
}) => {
  return (
    <div>
      <NavBar
        textColor={'text-white'}
        navData={navData}
        subCategoryData={subCategoryData}
      />
      <div data-testid="hero" className="flex h-screen overflow-hidden">
        <HeroBanner heroBanner={heroBanner.length && heroBanner[0]} />
        <div className="-z-10 md:block absolute top-0 hidden w-screen h-screen overflow-hidden bg-black">
          <Image
            layout="fill"
            priority
            src={urlFor(heroBanner[0].bgImageDesktop)}
            className="w-screen min-w-[1440px] opacity-50"
            alt=""
          />
        </div>
        <div className="-z-10 min-w-max md:hidden absolute top-0 w-screen h-screen overflow-hidden bg-black">
          <Image
            layout="fill"
            blur="true"
            loading="lazy"
            src={urlFor(heroBanner[0].bgImageMobile)}
            className="opacity-50"
            alt=""
          />
        </div>
      </div>
      <div className="mx-0 my-10 text-center text-white">
        <h2 className="text-[40px]">Our Best Sellers</h2>
      </div>
      {/* Where the top 8 best selling products are featured */}
      <div
        data-testid="product-link"
        className="m-auto mt-5 flex w-full max-w-[1400px] flex-wrap justify-center"
      >
        {products?.slice(0, 8).map((product, index) => (
          <Link key={index} href={`/product/${product.slug.current}`}>
            <a>
              <Product key={product._id} product={product} />
            </a>
          </Link>
        ))}
      </div>
      {/* Best selling categories or continuation of best selling products, for now it's just more products */}
      <div
        data-testid="products-banner"
        className="m-auto mt-20 flex h-fit w-full max-w-[1400px] flex-col justify-center overflow-hidden lg:flex-row"
      >
        {products.slice(9, 12).map((product) => (
          <ProductsBanner key={product._id} product={product} />
        ))}
      </div>
      <AboutUsBlurb aboutUsBanner={aboutUsBanner.length && aboutUsBanner[0]} />
      <FooterBanner footerBanner={footerBanner.length && footerBanner[0]} />
    </div>
  )
}

// fetching data from Sanity using a GROQ request and then exporting those props to my home components.
export const getServerSideProps = async () => {
  const products = await client.fetch('*[_type == "product"]')
  const heroBanner = await client.fetch('*[_type == "heroBanner"]')
  const footerBanner = await client.fetch('*[_type == "footerBanner"]')
  const navData = await client.fetch(
    '*[_type == "nav"]{title, linkUrl, navTile}'
  )
  const aboutUsBanner = await client.fetch('*[_type == "aboutUsBanner"]')
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
  `)

  return {
    props: {
      products,
      heroBanner,
      navData,
      subCategoryData,
      footerBanner,
      aboutUsBanner,
    },
  }
}

export default Home
