import {Product, FooterBanner, HeroBanner} from '../components/index'
import { client } from '../lib/client'

const Home = ({products, bannerData}) => {
  return (
    <div className=''>
      <div className='flex h-screen'>
        <HeroBanner heroBanner={ bannerData.length && bannerData[0] } />
        <div className='-z-10 absolute top-0 left-0 h-screen overflow-hidden bg-black'>
          <img src="/witch-bg.jpg" className=' md:w-screen opacity-50' alt="" />
        </div>
      </div>
      <div className='text-center my-10 mx-0 text-[#324d67]'>
        <h2  className='text-[40px] font-extrabold'>Beset Selling Products</h2>
        <p className='text-base font-bold'>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
      <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props:{products, bannerData}
  }
}

export default Home
