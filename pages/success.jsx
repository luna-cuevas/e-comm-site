import React, { useState } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'
import { useEffect } from 'react'
import { runFireworks } from '../lib/utils'
import { NavBar } from '../components'
import { client } from '../lib/client'

const Success = ({navData, subCategoryData}) => {
  const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext()

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
    runFireworks();
  }, [])

  return (
    <div className='md:h-fit bg-[#1e1e1e]'>
      <NavBar textColor={'text-white'} navData={navData} subCategoryData={subCategoryData} /> 
      <div className='max-w-[1000px] rounded-xl p-[50px] flex justify-center items-center flex-col bg-[#dddddd] m-auto mt-20'>
        <p className=' text-green-700 text-[40px]'>
          <BsBagCheckFill />
        </p>
        <h2 className='capitalize mt-[15px] text-[20px] font-bold md:text-[40px] text-[#324d67]'>Thank you for your order</h2>
        <p className='text-base font-semibold text-center'>Check  your email  inbox for your receipt</p>
        <p className='text-base font-semibold text-center m-[10px] mt-[30px]'>
          If you have  any questions, please email
          <a className="ml-[5px] text-[#f02d34]" href='mailto:s.cuevas14@gmail.com'>
            s.cuevas14@gmail.com
          </a>
        </p>
        <Link href='/'>
          <button type='button' width='300px' className='px-10 py-5 rounded-xl text-white bg-[#8d65a7]'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const navData = await client.fetch('*[_type == "nav"]{title, linkUrl, navTile}');
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
    props:{ navData, subCategoryData }
  }
}

export default Success