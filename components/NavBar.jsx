import { useState } from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const NavBar = ( { navData, subCategoryData, textColor } ) => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  const [mobSlider, setMobSlider] = useState(false);
  const [mobileNav,  setMobileNav] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const mainCategories = navData.map(item => [item.title, item.linkUrl, item.navTile]);

  return (
    <nav className={`flex px-2 group z-50 h-[80px] border-b-2 border-gray-700 ${textColor} bg-transparent hover:text-black hover:bg-[#c6c3d6] transition-[background] duration-500 relative`}>
      {/* <--------------------- Desktop Menu ---------------------> */}
      <div className="container flex flex-wrap items-center justify-between mx-auto">

        {/* Logo and title -- Left */}
        <button onClick={() => setMobileNav(!mobileNav)}  type="button" className="md:hidden hover:bg-gray-200 focus:outline-none inline-flex items-center p-2 mx-2 text-sm text-gray-500 rounded-lg" >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="z-[100] flex items-center my-5 ">
          {/* I couldn't get the fill-current utlity class working when pulling svg from the public file so i minified and inserted it here */}
          <svg xmlns="http://www.w3.org/2000/svg" className={`md:h-9 h-6 mr-3 group-hover:text-black ${textColor} fill-current`}  viewBox="0 0 512 512">
            <path d="M150.26 0c-27.62 0-50.087 22.467-50.087 50.087s22.467 50.087 50.087 50.087c27.619 0 50.087-22.468 50.087-50.087S177.879 0 150.26 0zm0 66.783c-9.22 0-16.696-7.475-16.696-16.696s7.475-16.696 16.696-16.696 16.696 7.475 16.696 16.696-7.476 16.696-16.696 16.696z"/>
            <circle cx="250.44" cy="83.478" r="16.696"/>
            <circle cx="294.96" cy="27.826" r="16.696"/>
            <path d="M441.52 166.96h20.388c9.22 0 16.696-7.475 16.696-16.696s-7.475-16.696-16.696-16.696h-104.22l71.509-71.509c6.52-6.52 6.52-17.091 0-23.611s-17.091-6.52-23.611 0l-95.121 95.12H50.085c-9.22 0-16.696 7.475-16.696 16.696s7.475 16.696 16.696 16.696h20.388c-23.292 35.143-37.084 77.11-37.084 122.43 0 45.963 13.945 88.663 37.816 124.13-21.694 5.497-37.816 24.989-37.816 48.393 0 27.662 22.424 50.087 50.087 50.087 23.404 0 42.896-16.121 48.393-37.816C167.335 498.055 210.035 512 255.999 512c45.961 0 88.658-13.944 124.12-37.811 5.498 21.693 24.99 37.811 48.392 37.811 27.662 0 50.087-22.424 50.087-50.087 0-23.402-16.118-42.891-37.809-48.392 23.87-35.465 37.817-78.166 37.817-124.13 0-45.324-13.792-87.291-37.084-122.43zM261.83 445.11c-.211.011-.424.011-.63.011-8.934 0-16.343-7.076-16.673-16.076-.343-9.217 6.853-16.967 16.066-17.304 63.195-2.337 114.9-54.332 117.72-117.49.407-9.217 7.989-16.663 17.424-15.935 9.212.402 16.343 8.206 15.934 17.414-3.583 80.412-69.404 146.41-149.84 149.38z"/>
          </svg>
          <Link href='/'  className="whitespace-nowrap self-center text-xl font-bold">Luna's Cauldron</Link>
        </div>
        
        {/* Pages and Categories -- Middle */}
        <div className="flex order-2">
          <div className='flex mx-2'>
            <Cart  />
            <button type='button' className={`text-[25px] group-hover:text-black ${textColor} cursor-pointer relative scale-100 hover:scale-110 bg-transparent border-none`} onClick={() => setShowCart(!showCart)}>
                <AiOutlineShopping />
                <span className='absolute top-0 -right-[8px] text-white bg-[#f02d34] w-4 h-4 text-[12px] rounded-[50%]'>{totalQuantity}</span>
            </button>
          </div>
        </div>
        
        {/* Shopping Bag and Mobile Menu Icon -- Right */}
        <div className="md:flex items-center order-1 hidden w-auto h-full align-middle">
          <ul className="nav-categories flex flex-row h-full mt-0 space-x-8 text-sm font-medium">
            {mainCategories?.map((category, index) => (
              <li index={index}  onMouseEnter={() => setSubMenu({...subMenu, [index]: !subMenu[index]})} onMouseLeave={() => setSubMenu({...subMenu, [index]: !subMenu[index]})} className={` border-slate-500 flex items-center justify-center w-fit h-full py-3 m-auto border-b-2 border-none`}>
                <Link href={`/${category[1] ? category[1] : ''}`}>
                  <a className="hover:underline text-inherit block p-0 py-2 pl-3 pr-4 text-lg rounded-lg" aria-current="page">
                    {category[0]}
                  </a>
                </Link>
                {/* Currently, this section is hardcoded to only render when category matches Products, in future refactoring, i'd like to make this section more dynamic */}
                {category[0] == 'Products' && (
                  <div className={`${subMenu[index] ? 'block' : 'hidden'} z-10 top-[100%] transition-all duration-500 pb-6 absolute left-0 w-screen bg-[#c6c3d6]`}>
                    <div className="text-[#1c1b1b] flex flex-wrap justify-center m-auto">
                      {subCategoryData[1]?.navItem?.map((item, index) => (
                        <div className={`w-fit flex flex-col mx-6 my-6 text-left`}>
                          <h2 index={index} className='mb-2 text-sm tracking-[0.2em] font-extrabold text-gray-600  uppercase'>{item.title}</h2>
                          {item.itemAndLink.link.map((subItem, index) => (
                            <Link href={`/product/${subItem.navItemUrl}`}>
                              <a index={index} className='hover:underline my-1 text-base font-normal'>{subItem.subCategory}</a>
                            </Link>
                          ))}
                        </div>
                      ))}
                      <div className='w-[150px] items-center my-6 ml-8'>
                        <img className='rounded-lg' src={urlFor(category[2])} alt="" />
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <--------------------- Mobile Menu Modal ---------------------> */}
      <div className={`${mobileNav ? 'left-0' : '-left-[100%]'} overflow-y-scroll md:hidden transition-all duration-300 fixed uppercase font-light h-screen ease-in-out w-screen z-[100] hover:text-white text-white tracking-[0.2rem]`} >
        {/* Closes modal when user clicks outside of the mobile navigation */}
        <div onClick={() => setMobileNav(false)} className='absolute top-0 right-0 w-2/12 h-screen bg-transparent'></div>
          <div className='absolute z-20 min-h-screen w-3/4 bg-[#1c1b1b]'>
            <button onClick={() => setMobileNav(false)} className='right-5 top-6 absolute'>X</button>
            <ul className="nav-categories h-fit md:h-full flex flex-col mt-10 ml-10">
              {mainCategories.map((category, index) => (
                <li index={index} className='border-slate-500 flex flex-col w-11/12 h-full py-3 text-white border-b-2'>
                  <h1  onClick={() => setMobSlider({...mobSlider, [index]: !mobSlider[index]})} className="h-fit flex items-center justify-between py-2 pl-3 pr-4 text-lg rounded-lg">
                    {category[0]}
                    {/* Again, i'm planning to refactor this snippet, may be I could add a boolean value in the Sanity schema. Something like "Contains Sub Categories?" if yes, render below */}
                    {category[0] == 'Products' && (
                      <div class={`circle-plus ${mobSlider[index] ? 'opened' : 'closed'} flex justify-end h-fit`}>
                        <div class="circle">
                          <div class="horizontal"></div>
                          <div class="vertical"></div>
                        </div>
                      </div>
                    )}
                  </h1>

                  {/* Currently, this section is hardcoded to only render when category matches Products, in future refactoring, i'd like to make this section more dynamic */}
                  {category[0] == 'Products' && (
                    <div className={`justify-center border-l-2  overflow-hidden ml-6 flex flex-wrap m-auto ${mobSlider[index] ? 'max-h-[2000px] visible transition-all border-gray-700 duration-1000 linear' : 'max-h-0  invisible transition-all duration-[700ms] linear'}`} >
                      {subCategoryData[1]?.navItem?.map((item, index) => (
                        <div className='flex flex-col w-full mx-6 text-left border-b-2 border-gray-700'>
                          <h2  onClick={ () => setSubMenu({...subMenu, [index]: !subMenu[index]}) } className='flex justify-between items-center py-6 text-sm tracking-[0.2em] text-[#ffffff7f] uppercase'>
                            {item.title}
                            <div class={`circle-plus ${subMenu[index] ? 'opened' : 'closed'} flex justify-end h-fit`}>
                              <div class="circle">
                                <div class="horizontal"></div>
                                <div class="vertical"></div>
                              </div>
                            </div>
                          </h2>
                          <div className={`pl-4 ml-3 flex overflow-hidden flex-col ${subMenu[index] ? 'mb-6 border-l-2 border-gray-600 max-h-96 leading-[100px] visible transition-all duration-500 ease-in-out' : 'border-l-2 max-h-0 leading-0 invisible transition-all duration-500 ease-in-out'} `}>
                            {item.itemAndLink.link.map((subItem, index) => (
                              <Link href={`/product/${subItem.navItemUrl}`}>
                                <a index={index} className='hover:underline my-1 text-base font-normal'>{subItem.subCategory}</a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>                    
      </div>
    </nav>
  )
}

// I initially tried to fetch the nav props in this component but quickly discovered 
// that getServerSideProps doesn't function in components, only in pages. Leaving here for future reference.

// export const getServerSideProps = async () => {
//   const query = '*[_type == "nav"]{title}';
//   const mainCats = await client.fetch(query);
//   return {
//     props:{mainCats}
//   }
// }

export default NavBar