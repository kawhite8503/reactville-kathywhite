import '../../styles/super-market.css'
import { useState } from 'react'

// Components & Data
import { products } from '../../data/market-data'
import MarketNav from '../SuperMarket/MarketNav'
import DisplayProducts from '../SuperMarket/DisplayProducts'
import Cart from '../SuperMarket/Cart'

const SuperMarket = () => {
  const [cart, setCart] = useState([])
  const [productCategory, setProductCategory] = useState('Produce')
  const [toggleCart, setToggleCart] = useState(true)

  const handleToggle = () => {
    setToggleCart(!toggleCart)
  }

  const addToCart = (item) => {
    const isItemInCart = cart.some((product) => product.id === item.id)
    if (isItemInCart) {
      setCart(cart.map((product) => product.id === item.id
      ?
      {...product, quantity: product.quantity + 1}
      : product
      ))
    } else {
      setCart([{...item, quantity: 1}, ...cart])
    }
  }

  const removeFromCart = (item) => {
    if (item.quantity > 1) {
      setCart(cart.map((product) => product.id === item.id
      ? {...item, quantity: item.quantity - 1}
      : product
      ))
    } else {
      setCart(cart.filter((product) => product.id !== item.id))
    }
  }

  console.log('Imported product data:::', products)
  console.log(productCategory)
  return (
    <div className="super-market">
      <section>
        <MarketNav 
          products={products} 
          setProductCategory={setProductCategory}
          handleToggle={handleToggle}
        />
        <DisplayProducts 
          products={products} 
          productCategory={productCategory} 
          addToCart={addToCart}
        />
      </section>
    {toggleCart &&
      <Cart 
        cart={cart} 
        removeFromCart={removeFromCart} 
        setCart={setCart}
        handleToggle={handleToggle}
      />
    }
    </div>
  )
}

export default SuperMarket