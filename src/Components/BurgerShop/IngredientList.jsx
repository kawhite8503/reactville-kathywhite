
import Ingredient from "./Ingredient"
import { useState,useEffect } from "react"


const IngredientList = (props) => {
	const [hasBuns, setHasBuns] = useState(false)

	useEffect(() => {
		setHasBuns(props.stack.filter(ingred => ingred.type === 'bun').length === 2)
	}, [props.stack])

	return (
		<ul>
			{props.ingredients.map((ingredient, idx) => 
				<Ingredient 
					key={idx}
					ingredient={ingredient}
					addToBurger={props.addToBurger}
					disabled={hasBuns && ingredient.type === 'bun'}
				/>
			)}
		</ul>
	)
}

export default IngredientList