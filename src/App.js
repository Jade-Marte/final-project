import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { ProvideAuth, PrivateRoute } from './components/Auth'
import RecipesContext from './components/RecipesContext'

import NavBar from './components/NavBar.js'
import SurveyPage from './pages/surveyPage.js'
import RecipeResultsPage from './pages/recipe-results.js'
import LoginPage from './pages/LoginPage'
import ViewRecipes from './pages/ViewRecipes'

function App() {
  const [recipes, setRecipes] = useState([])
  const recipesContextValue = { recipes, setRecipes }
  //these are test items. Delete when the program is working.
  let testResults = [
    {
      name: 'Result 1',
      description: 'One',
      picture:
        'https://valentinascorner.com/wp-content/uploads/2020/07/Shrimp-Ceviche-Recipe-3.jpg',
    },
    {
      name: 'Result 2',
      description: 'Two',
      picture:
        'https://therecipecritic.com/wp-content/uploads/2015/10/porcupinemeatballs-650x975.jpg',
    },
    {
      name: 'Result 3',
      description: 'Three',
      picture:
        'https://sweetandsavorymeals.com/wp-content/uploads/2019/05/Grilled-Eggplant-Recipe-4.jpg',
    },
  ]

  return (
    <ProvideAuth>
      <RecipesContext.Provider value={recipesContextValue}>
        <Router>
          <NavBar />
          <Container maxWidth='lg' className='App'>
            <Switch>
              <Route path='/survey'>
                <SurveyPage />
              </Route>

              <Route path='/recipe-results'>
                <RecipeResultsPage results={testResults} />
              </Route>

              <Route path='/view-recipes'>
                <ViewRecipes />
              </Route>

              <Route path='/login'>
                <LoginPage />
              </Route>
            </Switch>
          </Container>
        </Router>
      </RecipesContext.Provider>
    </ProvideAuth>
  )
}

export default App
