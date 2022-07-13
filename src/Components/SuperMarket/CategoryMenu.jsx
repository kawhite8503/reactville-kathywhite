
const CategoryMenu = (props) => {
  const categories = [...new Set(props.products.map((p) => p.category))]

  return (
    <select onChange={(e) => props.setProductCategory(e.target.value)}>
      {categories.map((category, idx) => 
        <option key={idx} value={category}>{category}</option>
        )}
        
    </select>
  )
}

export default CategoryMenu

