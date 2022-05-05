import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({children} ) => {
  return (
    <div className='overflow-hidden font-["Montserrat"]'>
      <Head>
        <title>Luna's Cauldron</title>
      </Head> 
      {/* <NavBar navData={navData} subCategoryData={subCategoryData} /> */}
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