import { Product, FooterBanner, HeroBanner } from '../components/index'
import { client } from '../lib/client'

const Home = ( { products, bannerData } ) => {
  return (
    <div>
      <HeroBanner heroBanner={ bannerData.length && bannerData[0] } />
      <div className='products-heading'>
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      {/* Map over the products array, take each product and create a Product component */}
      <div className='flex flex-wrap justify-center gap-[15px] mt-5 w-full'>
        {products?.map((product) => 
          <Product key={product._id} product={product} />
        )}
      </div>
      {/* If bannerData contains elements, display the first index */}
      <FooterBanner footerBanner={ bannerData.length && bannerData[0] } />
    </div>
  )
}


// I fetch the products and banner data from the server using getServerSideProps  
export const getServerSideProps = async () => {
  //*[_type == "product"]' is the sanity language (GROQ) query where * represents the document, _type is the filter 
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  // We do the same for the banner data
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  // And then return the data as props to use in our component
  return {
    props:{products, bannerData}
  }
}

export default Home
