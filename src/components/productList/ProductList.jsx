import React from 'react'
import './productList.css'
import Product from '../../components/product/Product'
const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className='pl-title'>Create & inspire. It's Furkan.</h1>
            <p className="pl-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem ab earum in, officiis ea repellendus quaerat commodi corrupti dolor animi non quam, ipsum temporibus, dignissimos placeat corporis nulla? Atque hic adipisci repellat modi libero.
            </p>
        </div>
        <div className="pl-list">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
  )
}

export default ProductList