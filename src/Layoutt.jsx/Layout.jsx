import React from 'react'
import Navbar from './components/Navbar'
import Shoes from './Shoes'
import About from '../About'
import Collection from './components/pages/Collection'
import Shop from './components/Shop'
import Admin from './components/pages/Admin'
const Layout = () => {
  return (
    <div>
      <Navbar/>
   <Shoes/>
      <About/>
      <Collection/>
      <Shop/>
      <Admin/>
    </div>
  )
}

export default Layout
