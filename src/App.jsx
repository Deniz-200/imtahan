import { useState } from 'react'
import './App.css'
import Admin from './Layoutt.jsx/components/pages/Admin'
import Home from './Layoutt.jsx/components/pages/Home'
import Layout from './Layoutt.jsx/Layout'
import { Route,Routes } from 'react-router-dom'
import Header from './Layoutt.jsx/components/pages/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
// import About from './Layoutt.jsx/components/About'
import Shop from './Layoutt.jsx/components/Shop'
import Contact from './Layoutt.jsx/components/pages/Contact'
import Shoes from './Layoutt.jsx/Shoes'
function App() {


  return (
    <>
<Header/>
 <Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/admin' element={<Admin/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>
    {/* <Route path='/about' element={<About/>}></Route> */}
    <Route path='/contact' element={<Contact/>}></Route>
  </Route>
  
 </Routes>


    </>
  )
}

export default App
