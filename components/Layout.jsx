import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='overflow-hidden font-["Montserrat"]'>
      <Head>
        <title>Luna's Cauldron</title>
      </Head>  
      <NavBar />
      <main className='main-container'>
        {children}  
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout