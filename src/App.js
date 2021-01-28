import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import {
  ProvideAuth,
  PrivateRoute,
  useProvideAuth,
} from './components/AuthContext'
import RecipesContext from './components/RecipesContext'

import NavBar from './components/NavBar.js'
import SurveyPage from './pages/surveyPage.js'
import RecipeResultsPage from './pages/recipe-results.js'
import LoginPage from './pages/LoginPage'
import ViewRecipe from './pages/ViewRecipe'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage'
import SavedRecipes from './pages/recipeStorage'

function App() {
  const [recipes, setRecipes] = useState([])
  const recipesContextValue = { recipes, setRecipes }

  return (
    <ProvideAuth>
      <RecipesContext.Provider value={recipesContextValue}>
        <Router>
          <Switch>
            <Route path='/survey'>
              <NavbarLayout>
                <Container maxWidth='lg'>
                  <SurveyPage />
                </Container>
              </NavbarLayout>
            </Route>

            <Route exact path='/'>
              <LandingPage />
            </Route>

            <Route path='/recipe-results'>
              <NavbarLayout>
                <Container maxWidth='lg'>
                  <RecipeResultsPage />
                </Container>
              </NavbarLayout>
            </Route>

            <PrivateRoute path='/view-recipe/:id'>
              <NavbarLayout>
                <Container maxWidth='lg'>
                  <ViewRecipe />
                </Container>
              </NavbarLayout>
            </PrivateRoute>

            <PrivateRoute path='/saved-recipes'>
              <NavbarLayout>
                <Container maxWidth='lg'>
                  <SavedRecipes />
                </Container>
              </NavbarLayout>
            </PrivateRoute>

            <Route path='/login'>
              <NavbarLayout>
                <Container maxWidth='lg'>
                  <LoginPage />
                </Container>
              </NavbarLayout>
            </Route>

            <Route path='/register'>
              <NavbarLayout>
                <Container maxWidth='lg'>
                  <RegisterPage />
                </Container>
              </NavbarLayout>
            </Route>
          </Switch>
        </Router>
      </RecipesContext.Provider>
    </ProvideAuth>
  )
}

function NavbarLayout(props) {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  )
}

export default App
