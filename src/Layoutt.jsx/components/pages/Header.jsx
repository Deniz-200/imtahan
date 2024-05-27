import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
const Header = () => {
  return (
    <div className='row '>
        <div className=" col-lg-12 col-sm-12
        
        headdiv">
      <div className='inpsearch'>
      <IoSearchSharp /><input type="search" placeholder='Search' className='hinput'/>
      </div>
      <div className='logo'>
        <div className='logoborder'><p>SHOPPERS</p></div>
      </div>
      <div className='icons'>
      <IoPerson />
      <FaRegHeart />
      <MdShoppingCart />
      </div>
      </div>
    </div>
  )
}

export default Header
