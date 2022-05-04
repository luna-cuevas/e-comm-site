import { useRef, useState } from 'react'
import { AiOutlineShopping, AiOutlineMinus } from 'react-icons/ai'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'

const NavBar = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  const [mobSlider, setMobSlider] = useState(false);
  const [mobileNav,  setMobileNav] = useState(false);
  const [subMenu, setSubMenu] = useState(false);


  return (
    // <nav className="flex px-2 h-auto md:h-[100px] bg-[#c6c3d6] md:text-white md:bg-transparent md:hover:bg-[#c6c3d6] transition-all duration-500 ">

    // <div class="drawer">
    //   <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
    //   <div class="drawer-content flex flex-col">
    //     {/* <!-- Navbar --> */}
    //     <div class="w-full flex">
    //       <div class="flex-none lg:hidden">
    //         <label for="my-drawer-3" class="btn btn-square btn-ghost">
    //           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    //         </label>
    //       </div> 
    //       <div class="flex-1 px-2 mx-2">Navbar Title</div>
    //       <div class="flex-none hidden lg:block">
    //         <ul class="menu menu-horizontal">
    //           {/* <!-- Navbar menu content here --> */}
    //           <li className='group border-slate-500 md:border-none md:justify-center flex flex-col items-center w-full h-full py-3 m-auto border-b-2'>
    //             <a href="#" className="md:p-0 h-fit hover:underline md:text-inherit block py-2 pl-3 pr-4 text-lg rounded-lg">Products</a>

    //             <div className='group-hover:flex group-hover:opacity-100 group-hover:h-fit pb-6 transition-all duration-300 opacity-0 h-0 hidden md:absolute top-[100%]  z-50 w-screen bg-[#c6c3d6] '>
    //               <div className='md:justify-center flex flex-wrap justify-between m-auto'>
    //                 <div className='w-fit flex flex-col mx-6 text-left'>
    //                   <h2 className='mb-2 text-sm tracking-[0.2em] text-gray-600 uppercase'>Essentials</h2>
    //                   <a href="" className='my-1 text-base font-normal'>Tarot Cards</a>
    //                   <a href="" className='my-1 text-base font-normal'>Books</a>
    //                   <a href="" className='my-1 text-base font-normal'>Jewelry</a>
    //                   <a href="" className='my-1 text-base font-normal'></a>
    //                 </div>
    //                 <div className='w-fit flex flex-col mx-6 text-left'>
    //                   <h2 className='text-sm tracking-[0.2em] text-gray-600 mb-2 uppercase'>Herbs</h2>
    //                   <a href="" className='my-1 text-base font-normal'>Ruda</a>
    //                   <a href="" className='my-1 text-base font-normal'>Palo Santo</a>
    //                   <a href="" className='my-1 text-base font-normal'>Sage</a>
    //                   <a href="" className='my-1 text-base font-normal'>Incense</a>
    //                 </div>
    //                 <div className='w-fit flex flex-col mx-6 text-left'>
    //                   <h2 className='text-sm tracking-[0.2em] text-gray-600 mb-2 uppercase'>Glass Work</h2>
    //                   <a href="" className='my-1 text-base font-normal'>Ruda</a>
    //                   <a href="" className='my-1 text-base font-normal'>Palo Santo</a>
    //                   <a href="" className='my-1 text-base font-normal'>Sage</a>
    //                   <a href="" className='my-1 text-base font-normal'>Incense</a>
    //                 </div>
    //                 <div className='w-fit flex flex-col mx-6 text-left'>
    //                   <h2 className='text-sm tracking-[0.2em] text-gray-600 mb-2 uppercase'>Mystical <br /> Home</h2>
    //                   <a href="" className='my-1 text-base font-normal'>Ruda</a>
    //                   <a href="" className='my-1 text-base font-normal'>Palo Santo</a>
    //                   <a href="" className='my-1 text-base font-normal'>Sage</a>
    //                   <a href="" className='my-1 text-base font-normal'>Incense</a>
    //                 </div>
    //                 <div className='w-fit flex flex-col mx-6 text-left'>
    //                   <h2 className='text-sm tracking-[0.2em] text-gray-600 mb-2 uppercase'>Resin</h2>
    //                   <a href="" className='my-1 text-base font-normal'>Ruda</a>
    //                   <a href="" className='my-1 text-base font-normal'>Palo Santo</a>
    //                   <a href="" className='my-1 text-base font-normal'>Sage</a>
    //                   <a href="" className='my-1 text-base font-normal'>Incense</a>
    //                 </div>
    //                 <div className='w-fit flex flex-col mx-6 text-left'>
    //                   <h2 className='text-sm tracking-[0.2em] text-gray-600 mb-2 uppercase'>Resin</h2>
    //                   <a href="" className='my-1 text-base font-normal'>Ruda</a>
    //                   <a href="" className='my-1 text-base font-normal'>Palo Santo</a>
    //                   <a href="" className='my-1 text-base font-normal'>Sage</a>
    //                   <a href="" className='my-1 text-base font-normal'>Incense</a>
    //                 </div>
    //                 <div className=' md:flex flex-col hidden w-32 mx-6 text-center'>
    //                   <a href="">
    //                       <img className='' src="/resin-tray.jpg" alt="" />
    //                   </a>
    //                 </div>
    //               </div>

    //             </div>
    //           </li>              
    //           <li><a>Navbar Item 2</a></li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div> 
    //   <div class="drawer-side">
    //     <label for="my-drawer-3" class="drawer-overlay"></label> 
    //     <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
    //       {/* <!-- Sidebar content here --> */}
    //       <li><a>Sidebar Item 1</a></li>
    //       <li><a>Sidebar Item 2</a></li>
          
    //     </ul>
        
    //   </div>
    // </div>
    // </nav>

    <nav className="flex px-2 h-auto md:h-[100px] bg-[#c6c3d6] text-white md:bg-transparent md:hover:bg-[#c6c3d6] transition-all duration-500 relative">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        {/* Logo and title -- Left */}
        <a href="/" className="z-[100] flex items-center my-5 ">
            <img src="/cauldron.svg" className="sm:h-9 h-6 mr-3" alt="Luna's Cauldron Logo" />
            <span className="whitespace-nowrap self-center text-xl font-bold">Luna's Cauldron</span>
        </a>
        {/* Pages and Categories -- Middle */}
        <div className="md:order-2 flex">
            <div className='flex mx-2'>
              {showCart && <Cart  />}
              <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
                  <AiOutlineShopping />
                  <span className='cart-item-qty'>{totalQuantity}</span>
              </button>
            </div>
            <button onClick={() => setMobileNav(!mobileNav)}  type="button" className="md:hidden hover:bg-gray-200 focus:outline-none inline-flex items-center p-2 mx-2 text-sm text-gray-500 rounded-lg" >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        {/* Shopping Bag and Mobile Menu Icon -- Right */}

        <div className="md:flex md:order-1 items-center hidden w-auto h-full align-middle transition-all duration-500 bg-transparent">
          <ul className="nav-categories flex flex-row h-full mt-0 space-x-8 text-sm font-medium">
            
            <li className='border-slate-500 flex items-center justify-center w-3/5 h-full py-3 m-auto border-b-2 border-none'>
              <a href="#" className="hover:underline text-inherit block p-0 py-2 pl-3 pr-4 text-lg rounded-lg" aria-current="page">Home</a>
            </li>

            <li className='group border-slate-500 flex flex-col items-center justify-center w-full h-full py-3 m-auto border-b-2 border-none'>
              <a href="#" className="h-fit hover:underline text-inherit block p-0 py-2 pl-3 pr-4 text-lg rounded-lg">
                Products              
              </a>

              

              <div className='group-hover:flex pb-6 hidden absolute top-[100%] left-0 z-50 w-screen bg-[#c6c3d6] '>
                <div className="flex flex-wrap justify-center m-auto">
                  <div className='w-fit flex flex-col mx-6 my-6 text-left'>
                    <h2 className='mb-2 text-sm tracking-[0.2em] text-gray-600 uppercase'>Essentials</h2>
                    <a href="" className='my-1 text-lg font-normal'>Tarot Cards</a>
                    <a href="" className='my-1 text-lg font-normal'>Books</a>
                    <a href="" className='my-1 text-lg font-normal'>Jewelry</a>
                    <a href="" className='my-1 text-lg font-normal'></a>
                  </div>


                  <div className='md:w-fit flex flex-col w-1/3 mx-6 my-6 text-left'>
                    <h2 className='text-sm tracking-[0.2em] text-gray-600 mb-2 uppercase'>Herbs</h2>
                    <a href="" className='my-1 text-lg font-normal'>Ruda</a>
                    <a href="" className='my-1 text-lg font-normal'>Palo Santo</a>
                    <a href="" className='my-1 text-lg font-normal'>Sage</a>
                    <a href="" className='my-1 text-lg font-normal'>Incense</a>
                  </div>
                  <div className='md:w-fit flex flex-col w-1/3 mx-6 my-6 text-left'>
                    <h2 className='text-sm tracking-[0.2em] text-gray-600 mb-2 uppercase'>Glass Work</h2>
                    <a href="" className='my-1 text-lg font-normal'>Ruda</a>
                    <a href="" className='my-1 text-lg font-normal'>Palo Santo</a>
                    <a href="" className='my-1 text-lg font-normal'>Sage</a>
                    <a href="" className='my-1 text-lg font-normal'>Incense</a>
                  </div>
                  <div className='md:w-fit flex flex-col w-1/3 mx-6 my-6 text-left'>
                    <h2 className='text-sm tracking-[0.2em] text-gray-600 mb-2 uppercase'>Mystical <br /> Home</h2>
                    <a href="" className='my-1 text-lg font-normal'>Ruda</a>
                    <a href="" className='my-1 text-lg font-normal'>Palo Santo</a>
                    <a href="" className='my-1 text-lg font-normal'>Sage</a>
                    <a href="" className='my-1 text-lg font-normal'>Incense</a>
                  </div>
                  <div className='md:w-fit flex flex-col w-1/3 mx-6 my-6 text-left'>
                    <h2 className='text-sm tracking-[0.2em] text-gray-600 mb-2 uppercase'>Resin</h2>
                    <a href="" className='my-1 text-lg font-normal'>Ruda</a>
                    <a href="" className='my-1 text-lg font-normal'>Palo Santo</a>
                    <a href="" className='my-1 text-lg font-normal'>Sage</a>
                    <a href="" className='my-1 text-lg font-normal'>Incense</a>
                  </div>
                  <div className='md:w-fit flex flex-col w-1/3 mx-6 my-6 text-left'>
                    <h2 className='text-sm tracking-[0.2em] text-gray-600 mb-2 uppercase'>Resin</h2>
                    <a href="" className='my-1 text-lg font-normal'>Ruda</a>
                    <a href="" className='my-1 text-lg font-normal'>Palo Santo</a>
                    <a href="" className='my-1 text-lg font-normal'>Sage</a>
                    <a href="" className='my-1 text-lg font-normal'>Incense</a>
                  </div>
                  <div className=' md:flex flex-col hidden w-32 mx-6 text-center'>
                    <a href="">
                        <img className='' src="/resin-tray.jpg" alt="" />
                    </a>
                  </div>
                </div>

              </div>
            </li>

            <li className='border-slate-500 md:border-none flex items-center justify-center w-3/5 h-full py-3 m-auto border-b-2'>
              <a href="#" className=" md:p-0 hover:underline md:text-inherit block py-2 pl-3 pr-4 text-xl rounded-lg">F.A.Q</a>
            </li>
            <li className='border-slate-500 md:border-none flex items-center justify-center w-3/5 h-full py-3 m-auto border-b-2'>
              <a href="#" className="md:p-0 hover:underline md:text-inherit block py-2 pl-3 pr-4 text-xl rounded-lg">Contact</a>
            </li>
          </ul>
        </div>
        
      </div>


      <div className={`${mobileNav ? 'left-0' : '-left-[100%]'} overflow-y-scroll h-screen md:hidden transition-all duration-300 fixed uppercase font-light bg-[#1c1b1b] min-h-screen ease-in-out w-3/4 z-[300] hover:text-white text-white tracking-[0.2rem]`} >
          <button onClick={() => setMobileNav(false)} className='right-10 top-5 absolute'>X</button>
          <ul className="nav-categories h-fit sm:h-full flex flex-col mt-10 ml-10">

            <li className='border-slate-500 md:border-none flex w-11/12 h-full py-3 text-white border-b-2'>
              <a href="#" className="block py-2 pl-3 pr-4 text-lg rounded-lg" aria-current="page">Home</a>
            </li>

            <li className='border-slate-500 flex flex-col w-11/12 h-full py-3 text-white border-b-2'>
              <h1  onClick={() => setMobSlider(!mobSlider)} className="h-fit flex items-center justify-between py-2 pl-3 pr-4 text-lg rounded-lg">
                Products
                <div class={`circle-plus ${mobSlider ? 'opened' : 'closed'} flex justify-end h-fit`}>
                  <div class="circle">
                    <div class="horizontal"></div>
                    <div class="vertical"></div>
                  </div>
                </div>
              </h1>
                <div className={`justify-center overflow-hidden flex flex-wrap m-auto ${mobSlider ? 'max-h-[2000px] visible transition-all duration-1000 ease' : 'max-h-0 invisible transition-all duration-500 ease'}`} >

                  <div className='flex flex-col w-full mx-6 text-left border-b-2 border-gray-700'>
                    <h2  onClick={ () => setSubMenu({...subMenu, [0]: !subMenu[0]}) } className='flex justify-between items-center py-6 text-sm tracking-[0.2em] text-[#ffffff7f] uppercase'>
                      Essentials
                      <div class={`circle-plus ${subMenu[0] ? 'opened' : 'closed'} flex justify-end h-fit`}>
                        <div class="circle">
                          <div class="horizontal"></div>
                          <div class="vertical"></div>
                        </div>
                      </div>
                    </h2>
                    <div className={`pl-4 ml-3 flex overflow-hidden flex-col ${subMenu[0] ? 'mb-6 border-l-2 border-gray-600 max-h-96 leading-[100px] visible transition-all duration-500 ease-in-out' : 'border-l-2 max-h-0 leading-0 invisible transition-all duration-500 ease-in-out'} `}>
                      <a href="" className='my-2 text-lg font-normal'>Tarot Cards</a>
                      <a href="" className='my-2 text-lg font-normal'>Books</a>
                      <a href="" className='my-2 text-lg font-normal'>Jewelry</a>
                      <a href="" className='my-2 text-lg font-normal'></a>
                    </div>
                  </div>

                  <div className='flex flex-col w-full mx-6 text-left border-b-2 border-gray-700'>
                    <h2  onClick={() => setSubMenu({...subMenu, [1]: !subMenu[1]}) } className='py-6 text-sm tracking-[0.2em] text-[#ffffff7f] uppercase'>
                      Herbs
                      <div class={`circle-plus ${subMenu[0] ? 'opened' : 'closed'} flex justify-end h-fit`}>
                        <div class="circle">
                          <div class="horizontal"></div>
                          <div class="vertical"></div>
                        </div>
                      </div>
                    </h2>
                    <div className={`pl-4 ml-3 flex overflow-hidden flex-col ${subMenu[1] ? 'mb-6 border-l-2 border-gray-600 max-h-96 leading-[100px] visible transition-all duration-500 ease-in-out' : 'border-l-2 max-h-0 leading-0 invisible transition-all duration-500 ease-in-out'} `}>
                      <a href="" className='my-2 text-lg font-normal'>Ruda</a>
                      <a href="" className='my-2 text-lg font-normal'>Palo Santo</a>
                      <a href="" className='my-2 text-lg font-normal'>Sage</a>
                      <a href="" className='my-2 text-lg font-normal'>Incense</a>
                    </div>
                  </div>

                  <div className='flex flex-col w-full mx-6 text-left border-b-2 border-gray-700'>
                    <h2 onClick={() => setSubMenu({...subMenu, [2]: !subMenu[2]}) } className='py-6 text-sm tracking-[0.2em] text-[#ffffff7f] mb-2 uppercase'>
                      Glass Work
                      <div class={`circle-plus ${subMenu[0] ? 'opened' : 'closed'} flex justify-end h-fit`}>
                        <div class="circle">
                          <div class="horizontal"></div>
                          <div class="vertical"></div>
                        </div>
                      </div>
                    </h2>
                    <div className={`pl-4 ml-3 flex overflow-hidden flex-col ${subMenu[2] ? 'mb-6 border-l-2 border-gray-600 max-h-96 leading-[100px] visible transition-all duration-500 ease-in-out' : 'border-l-2 max-h-0 leading-0 invisible transition-all duration-500 ease-in-out'} `}>
                      <a href="" className='my-1 text-lg font-normal'>Ruda</a>
                      <a href="" className='my-1 text-lg font-normal'>Palo Santo</a>
                      <a href="" className='my-1 text-lg font-normal'>Sage</a>
                      <a href="" className='my-1 text-lg font-normal'>Incense</a>
                    </div>
                  </div>

                  <div className='flex flex-col w-full mx-6 text-left border-b-2 border-gray-700'>
                    <h2 onClick={() => setSubMenu({...subMenu, [3]: !subMenu[3]}) } className='py-6 text-sm tracking-[0.2em] text-[#ffffff7f] mb-2 uppercase'>
                      Mystical Home
                      <div class={`circle-plus ${subMenu[0] ? 'opened' : 'closed'} flex justify-end h-fit`}>
                        <div class="circle">
                          <div class="horizontal"></div>
                          <div class="vertical"></div>
                        </div>
                      </div>
                    </h2>
                    <div className={`pl-4 ml-3 flex overflow-hidden flex-col ${subMenu[3] ? 'mb-6 border-l-2 border-gray-600 max-h-96 leading-[100px] visible transition-all duration-500 ease-in-out' : 'border-l-2 max-h-0 leading-0 invisible transition-all duration-500 ease-in-out'} `}>
                      <a href="" className='my-1 text-lg font-normal'>Ruda</a>
                      <a href="" className='my-1 text-lg font-normal'>Palo Santo</a>
                      <a href="" className='my-1 text-lg font-normal'>Sage</a>
                      <a href="" className='my-1 text-lg font-normal'>Incense</a>
                    </div>
                  </div>

                  <div className='flex flex-col w-full mx-6 text-left border-b-2 border-gray-700'>
                    <h2 onClick={() => setSubMenu({...subMenu, [4]: !subMenu[4]}) } className='py-6 text-sm tracking-[0.2em] text-[#ffffff7f] mb-2 uppercase'>
                      Resin

                      <div class={`circle-plus ${subMenu[0] ? 'opened' : 'closed'} flex justify-end h-fit`}>
                        <div class="circle">
                          <div class="horizontal"></div>
                          <div class="vertical"></div>
                        </div>
                      </div>
                    </h2>
                    <div className={`pl-4 ml-3 flex overflow-hidden flex-col ${subMenu[4] ? 'mb-6 border-l-2 border-gray-600 max-h-96 leading-[100px] visible transition-all duration-500 ease-in-out' : 'border-l-2 max-h-0 leading-0 invisible transition-all duration-500 ease-in-out'} `}>
                      <a href="" className='my-1 text-lg font-normal'>Ruda</a>
                      <a href="" className='my-1 text-lg font-normal'>Palo Santo</a>
                      <a href="" className='my-1 text-lg font-normal'>Sage</a>
                      <a href="" className='my-1 text-lg font-normal'>Incense</a>
                    </div>
                  </div>

                  <div className='flex flex-col w-full mx-6 text-left border-b-2 border-gray-700'>
                    <h2 onClick={() => setSubMenu({...subMenu, [5]: !subMenu[5]}) } className='py-6 text-sm tracking-[0.2em] text-[#ffffff7f] mb-2 uppercase'>Resin</h2>
                    <div className={`pl-4 ml-3 flex overflow-hidden flex-col ${subMenu[5] ? 'mb-6 border-l-2 border-gray-600 max-h-96 leading-[100px] visible transition-all duration-500 ease-in-out' : 'border-l-2 max-h-0 leading-0 invisible transition-all duration-500 ease-in-out'} `}>
                      <a href="" className='my-1 text-lg font-normal'>Ruda</a>
                      <a href="" className='my-1 text-lg font-normal'>Palo Santo</a>
                      <a href="" className='my-1 text-lg font-normal'>Sage</a>
                      <a href="" className='my-1 text-lg font-normal'>Incense</a>
                    </div>
                  </div>
                  <div className='md:flex flex-col hidden w-32 mx-6 text-center'>
                    <a href="">
                        <img className='' src="/resin-tray.jpg" alt="" />
                    </a>
                  </div>
                </div>

            </li>

            <li className='border-slate-500 md:border-none flex w-11/12 h-full py-3 border-b-2'>
              <a href="#" className=" md:p-0 hover:underline block py-2 pl-3 pr-4 text-xl text-white rounded-lg">F.A.Q</a>
            </li>
            <li className='border-slate-500 md:border-none flex w-11/12 h-full py-3 border-b-2'>
              <a href="#" className="md:p-0 hover:underline block py-2 pl-3 pr-4 text-xl text-white rounded-lg">Contact</a>
            </li>
          </ul>
        </div>
      
    </nav>
  )
}

export default NavBar