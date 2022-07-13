import { useState } from 'react'
import CategoryMenu from '../SuperMarket/CategoryMenu'


const MarketNav = (props) => {


  return (
    <nav>
      <h1>Super Market</h1>
      <CategoryMenu products={props.products} setProductCategory={props.setProductCategory}/>
      <button onClick={props.handleToggle} id="cart-button"></button>
    </nav>
  )
}

export default MarketNav
