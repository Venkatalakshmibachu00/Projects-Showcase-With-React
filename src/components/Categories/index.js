import './index.css'

const Categories = props => {
  const {categoriesList, activeCategory, onCategoryChange} = props
  const handleChange = event => {
    onCategoryChange(event.target.value)
  }

  return (
    <div className="categories-container">
      <select
        className="select-input"
        value={activeCategory}
        onChange={handleChange}
      >
        {categoriesList.map(category => (
          <option key={category.id} value={category.id}>
            {category.displayText}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Categories
