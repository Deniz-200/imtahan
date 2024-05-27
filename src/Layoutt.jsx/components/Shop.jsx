import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Shop = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/').then(
      res => setdata(res.data))
  }, [])


  return (
    data.map(element => {
      return (
        <div className='cruddiv'>
            <div className='mehsul ' key={element.id}>
              <div className='photoo'><img src={element.photo} alt="" /></div>
              <div className='qiymet'>
                <h3>{element.h3}</h3>
                <p>{element.p}</p>
                <span>{element.span}</span>
              </div>
            </div>
        </div>
      )
    })
  )
}
export default Shop
