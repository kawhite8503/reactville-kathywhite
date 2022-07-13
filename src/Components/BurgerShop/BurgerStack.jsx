import { useState } from 'react'
import Ingredient from './Ingredient'

const BurgerStack = (props) => {


  return (
  <>
    {props.stack?.length ?
    <ul className="burger-stack">
      {props.stack.map((ingredient, idx) =>
        <Ingredient 
        key={idx}
        ingredient={ingredient}
        removeFromBurger={props.removeFromBurger}
        idx={idx}
        />
        )}
    </ul>
    :
    <>
      <h2 style={{width: '100vw'}}>No ingredients yet!</h2>
    </>
    }
  </>
  )
}

export default BurgerStack