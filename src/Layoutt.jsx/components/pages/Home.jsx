import React from 'react'
import Header from './Header'
import Shoes from '../../Shoes'
import About from '../../../About'
import Collection from './Collection'
import Shop from '../Shop'
import Admin from './Admin'
const Home = () => {
  return (
    <div>
      <Header/>
      <Shoes/>
      <About/>
      <Collection/>
      <Shop/>
      <Admin/>
    </div>
  )
}

export default Home
