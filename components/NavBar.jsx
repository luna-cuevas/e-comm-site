import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'

const NavBar = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext()

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 rounded mb-5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        {/* Logo and title -- Left */}
        <a href="/" className="flex items-center">
            <img src="/cauldron.svg" className="sm:h-9 h-6 mr-3" alt="Luna's Cauldron Logo" />
            <span className="whitespace-nowrap self-center text-xl font-bold text-[#324d67]">Luna's Cauldron</span>
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
            <button data-collapse-toggle="mobile-menu-4" type="button" className="md:hidden hover:bg-gray-200 focus:outline-none inline-flex items-center p-2 mx-2 text-sm text-gray-500 rounded-lg" aria-controls="mobile-menu-4" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        {/* Shopping Bag and Mobile Menu Icon -- Right */}
        <div className="md:flex md:w-auto md:order-1 items-center justify-between hidden w-full" id="mobile-menu-4">
          <ul className="md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium flex flex-col mt-4 text-white">
            <li>
              <a href="#" className=" hover:bg-[#cba3e8] md:hover:bg-white text-lg md:bg-transparent md:hover:text-blue-300 md:text-[#a876cb] bg-[#a876cb] rounded-lg md:border-0 md:p-0 block py-2 pl-3 pr-4 border-gray-300" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="hover:bg-[#cba3e8] md:hover:bg-white text-lg text-gray-500 hover:text-white md:hover:text-blue-300 rounded-lg md:p-0 block py-2 pl-3 pr-4 ">Products</a>
            </li>
            <li>
              <a href="#" className="hover:bg-[#cba3e8] md:hover:bg-white text-lg text-gray-500 hover:text-white md:hover:text-blue-300 rounded-lg md:p-0 block py-2 pl-3 pr-4 ">F.A.Q</a>
            </li>
            <li>
              <a href="#" className="hover:bg-[#cba3e8] md:hover:bg-white text-lg text-gray-500 hover:text-white md:hover:text-blue-300 rounded-lg  md:p-0 block py-2 pl-3 pr-4">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar