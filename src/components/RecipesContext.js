import React from 'react'

const RecipesContext = React.createContext({
  recipes: [],
  setRecipes: () => {},
})

export default RecipesContext
