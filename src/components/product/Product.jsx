import React from 'react'
import './product.css'
import Addres from '../../img/addres.png'

const Product = () => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href="https://www.linkedin.com/in/furkan-tasdemir/" target="_blank">
        <img src={Addres} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default Product