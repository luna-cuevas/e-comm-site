import { Product, FooterBanner, HeroBanner, NavBar, ProductsBanner } from '../components/index'
import { client } from '../lib/client'

const Home = ({products, bannerData, navData, subCategoryData}) => {
  return (
    <div>
      <NavBar textColor={'text-white'} navData={navData} subCategoryData={subCategoryData} />
      <div className='flex h-screen'>
        <HeroBanner heroBanner={ bannerData.length && bannerData[0] } />
        <div className='-z-10 absolute top-0 left-0 h-screen overflow-hidden bg-black'>
          <img src="/witch-bg.jpg" className=' md:w-screen opacity-50' alt="" />
        </div>
      </div>
      <div className='mx-0 my-10 text-center'>
        <h2  className='text-[40px] '>Our Best Sellers</h2>
      </div>
      <div className='flex flex-wrap justify-center mt-5 w-full max-w-[1400px] m-auto'>
        {products?.map((product) => 
          <Product key={product._id} product={product} />
        )}
      </div>
      <div className='flex flex-col justify-center mt-20 w-full max-w-[1400px] m-auto'>
        {products.slice(3, 6).map((product) => (
            <ProductsBanner key={product._id} product={product} />
        ))}
      </div>
      <div className='flex flex-col justify-center mt-20 w-full max-w-[1400px] m-auto'>
          <div>
            <img src="" alt="" />
          </div>
          <div>

          </div>
      </div>
      <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
    </div>
  )
}

// fetching data from Sanity using a GROQ request and then exporting those props to my home components.
export const getServerSideProps = async () => {
  const products = await client.fetch('*[_type == "product"][0...8]');
  const bannerData = await client.fetch('*[_type == "banner"]');
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
    props:{products, bannerData, navData, subCategoryData}
  }
}

export default Home
