import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div className=' navbar1' >
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/admin'>Admin</Link>
      <p>Catalogue</p>
      <p>Ner Arriwals</p>
      <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
