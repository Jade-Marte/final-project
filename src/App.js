import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { ProvideAuth, PrivateRoute } from './components/Auth'
import RecipesContext from './components/RecipesContext'

import NavBar from './components/NavBar.js'
import SurveyPage from './pages/surveyPage.js'
import RecipeResultsPage from './pages/recipe-results.js'
import LoginPage from './pages/LoginPage'
import ViewRecipe from './pages/ViewRecipe'
import LandingPage from './pages/LandingPage'

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

            <Route path='/view-recipe'>
              <Container maxWidth='lg'>
                <ViewRecipe />
              </Container>
            </Route>

            <Route path='/login'>
              <NavbarLayout>
                <Container maxWidth='lg'>
                  <LoginPage />
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
