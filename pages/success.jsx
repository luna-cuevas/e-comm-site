import React, { useState } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'
import { useEffect } from 'react'
import { runFireworks } from '../lib/utils'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext()

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
    runFireworks();
  }, [])

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order</h2>
        <p className='email-msg'>Check  your email  inbox for your receipt</p>
        <p className='description'>
          If you have  any questions, please email
          <a className="email" href='mailto:s.cuevas14@gmail.com'>
            s.cuevas14@gmail.com
          </a>
        </p>
        <Link href='/'>
          <button type='button' width='300px' className='btn'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success