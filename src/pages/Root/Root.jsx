import React from 'react'
import Navbar from '../Home/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Home/Footer'

const Root = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root
