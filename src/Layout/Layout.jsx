import React from 'react'
import { Outlet } from 'react-router-dom';
import Navdesy from './Navdesy';
// import Footer from './Footer';

const Layout = () => {

  return (
    <div className=''>
        {/* <Navbar/> */}
        <Navdesy/>
        <div className='min-h-10'></div>
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
}

export default Layout