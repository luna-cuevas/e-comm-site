import { useState } from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'

const NavBar = ( { navData, subCategoryData } ) => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  const [mobSlider, setMobSlider] = useState(false);
  const [mobileNav,  setMobileNav] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const mainCategories = navData.map(item => item.title);

  return (
    <nav className="flex px-2 group h-[100px] text-white bg-transparent hover:text-black hover:bg-[#c6c3d6] transition-[background] duration-500 relative">
      {/* <--------------------- Desktop Menu ---------------------> */}
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        {/* Logo and title -- Left */}
        <a href="/" className="z-[100] flex items-center my-5 ">
            <img src="/cauldron.svg" className="sm:h-9 h-6 mr-3" alt="Luna's Cauldron Logo" />
            <span className="whitespace-nowrap self-center text-xl font-bold">Luna's Cauldron</span>
        </a>
        {/* Pages and Categories -- Middle */}
        <div className="flex order-2">
            <div className='flex mx-2'>
              <Cart  />
              <button type='button' className='text-[25px] group-hover:text-black text-white cursor-pointer relative scale-100 hover:scale-110 bg-transparent border-none ' onClick={() => setShowCart(!showCart)}>
                  <AiOutlineShopping />
                  <span className='absolute top-0 -right-[8px] text-white bg-[#f02d34] w-4 h-4 text-[12px] rounded-[50%]'>{totalQuantity}</span>
              </button>
            </div>
            <button onClick={() => setMobileNav(!mobileNav)}  type="button" className="md:hidden hover:bg-gray-200 focus:outline-none inline-flex items-center p-2 mx-2 text-sm text-gray-500 rounded-lg" >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        {/* Shopping Bag and Mobile Menu Icon -- Right */}

        <div className="md:flex items-center order-1 hidden w-auto h-full align-middle">
          <ul className="nav-categories flex flex-row h-full mt-0 space-x-8 text-sm font-medium">
            {mainCategories.map((category, index) => (
              <li index={index} className={`group border-slate-500 flex items-center justify-center w-3/5 h-full py-3 m-auto border-b-2 border-none`}>
                <a href="#" className="hover:underline text-inherit block p-0 py-2 pl-3 pr-4 text-lg rounded-lg" aria-current="page">
                  {category}
                </a>
                {/* Currently, this section is hardcoded to only render when category matches Products, in future refactoring, i'd like to make this section more dynamic */}
                {category == 'Products' && (
                  <div className='group-hover:visible group transition-all duration-500 pb-6 invisible absolute top-[100%] bg-transparent left-0 z-50 w-screen group-hover:bg-[#c6c3d6] '>
                    <div className="group-hover:text-[#1c1b1b] flex flex-wrap justify-center m-auto text-transparent">
                      {subCategoryData[1].navItem.map((item, index) => (
                        <div className='w-fit flex flex-col mx-6 my-6 text-left'>
                          <h2 index={index} className='mb-2 text-sm tracking-[0.2em] font-extrabold group-hover:text-gray-600 text-transparent uppercase'>{item.title}</h2>
                          {item.itemAndLink.link.map((subItem, index) => (
                            <a index={index} href={subItem.navItemUrl} className='hover:underline my-1 text-base font-normal'>{subItem.subCategory}</a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <--------------------- Mobile Menu ---------------------> */}
      <div className={`${mobileNav ? 'left-0' : '-left-[100%]'} overflow-y-scroll h-screen md:hidden transition-all duration-300 fixed uppercase font-light bg-[#1c1b1b] min-h-screen ease-in-out w-3/4 z-[300] hover:text-white text-white tracking-[0.2rem]`} >
          <button onClick={() => setMobileNav(false)} className='right-10 top-5 absolute'>X</button>
          <ul className="nav-categories h-fit sm:h-full flex flex-col mt-10 ml-10">
            {mainCategories.map((category, index) => (
                <li index={index} className='border-slate-500 flex flex-col w-11/12 h-full py-3 text-white border-b-2'>
                  <h1  onClick={() => setMobSlider({...mobSlider, [index]: !mobSlider[index]})} className="h-fit flex items-center justify-between py-2 pl-3 pr-4 text-lg rounded-lg">
                    {category}
                    {/* Again, i'm planning to refactor this snippet, maybe I could add a boolean value in the Sanity schema. Something like "Contains Sub Categories?" if yes, render below */}
                    {category == 'Products' && (
                      <div class={`circle-plus ${mobSlider[index] ? 'opened' : 'closed'} flex justify-end h-fit`}>
                        <div class="circle">
                          <div class="horizontal"></div>
                          <div class="vertical"></div>
                        </div>
                      </div>
                    )}
                  </h1>

                  {/* Currently, this section is hardcoded to only render when category matches Products, in future refactoring, i'd like to make this section more dynamic */}
                  {category == 'Products' && (
                    <div className={`justify-center border-l-2  overflow-hidden ml-6 flex flex-wrap m-auto ${mobSlider[index] ? 'max-h-[2000px] visible transition-all border-gray-700 duration-1000 linear' : 'max-h-0  invisible transition-all duration-[700ms] linear'}`} >
                      {subCategoryData[1].navItem.map((item, index) => (
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
                              <a index={index} href={subItem.navItemUrl} className='hover:underline my-1 text-base font-normal'>{subItem.subCategory}</a>
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