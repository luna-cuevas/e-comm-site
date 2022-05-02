import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='p-10'>
      <Head>
        <title>Audio Heaven</title>
      </Head>   
      <header>
        <NavBar />
      </header>
      <main className='md:max-w-[1400px] m-auto w-full'>
        {children}  
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout