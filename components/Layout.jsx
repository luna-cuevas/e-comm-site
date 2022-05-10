import React from 'react'
import Head from 'next/head'
import Footer from './Footer'

const Layout = ({children} ) => {
  return (
    <div className='overflow-hidden font-["Montserrat"]'>
      <Head>
        <title>Luna's Cauldron</title>
      </Head> 
      <main>
        {children}  
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout