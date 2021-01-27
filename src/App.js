import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { ProvideAuth, PrivateRoute } from "./components/Auth";
import RecipesContext from "./components/RecipesContext";

import NavBar from "./components/NavBar.js";
import SurveyPage from "./pages/surveyPage.js";
import RecipeResultsPage from "./pages/recipe-results.js";
import LoginPage from "./pages/LoginPage";
import ViewRecipes from "./pages/ViewRecipes";
import LandingPage from "./pages/LandingPage";

function App() {
  const [recipes, setRecipes] = useState([]);
  const recipesContextValue = { recipes, setRecipes };
  return (
    <ProvideAuth>
      <RecipesContext.Provider value={recipesContextValue}>
        <Router>
          <NavBar />

          <Switch>
            <Route path="/survey">
              <Container maxWidth="lg">
                <SurveyPage />
              </Container>
            </Route>

            <Route exact path="/">
              {/* <Container maxWidth={false}> */}
              <LandingPage />
              {/* </Container> */}
            </Route>

            <Route path="/recipe-results">
              <Container maxWidth="lg">
                <RecipeResultsPage results={testResults} />
              </Container>
            </Route>

            <Route path="/view-recipes">
              <Container maxWidth="lg">
                <ViewRecipes />
              </Container>
            </Route>

            <Route path="/login">
              <Container maxWidth="lg">
                <LoginPage />
              </Container>
            </Route>
          </Switch>
        </Router>
      </RecipesContext.Provider>
    </ProvideAuth>
  );
}

export default App;
