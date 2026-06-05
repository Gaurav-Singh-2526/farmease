import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Applayout = () => {
  return (
    <>
      <div className="app-layout">
        <div className="main-content">
          
          <Header />
          <Outlet />
        </div>

        <Footer />
      </div>
    </>

  )
}

export default Applayout;