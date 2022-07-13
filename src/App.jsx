import React, { useState } from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'


// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'
import SuperMarket from './Components/SuperMarket/SuperMarket'




const App = () => {
  const [cash, setCash] = useState(100)

  const handleExchange = (amt) => {
    setCash()
  }

  return (
    <>
    <Nav cash={cash} handleExchange={handleExchange}/>
    <main>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/burgers' element={<BurgerShop />} />
        <Route path='/market' element={<SuperMarket />} />        
      </Routes>
    </main>
    </>


  )
}

export default App