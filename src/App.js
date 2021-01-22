import logo from "./logo.svg";
import "./App.css";
import RecipeResults from "./pages/recipe-results.js";
import NavBar from "./NavBar.js";
import React from "react";
import Survey from "./pages/surveyPage.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import SavedRecipes from "./pages/recipeStorage.js";
function App() {
  //these are test items. Delete when the program is working.
  let testResults = [
    {
      name: "Result 1",
      description: "One",
      picture:
        "https://cdn.cancercenter.com/-/media/ctca/images/others/blogs/2019/06-june/02-blog-healthy-food-l.jpg",
    },
    {
      name: "Result 2",
      description: "Two",
      picture:
        "https://weneedfun.com/wp-content/uploads/2015/10/Delicious-Food-Photos-7.jpg",
    },
    {
      name: "Result 3",
      description: "Three",
      picture:
        "https://blog.hdwallsource.com/wp-content/uploads/2015/01/italian-food-wallpaper-hd-44478-45604-hd-wallpapers.jpg",
    },
  ];
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <div className="App">
          <Switch>
            <Route path="/surveyPage">
              <Survey />
            </Route>
            <Route path="/savedPage">
              <SavedRecipes />
            </Route>
            <RecipeResults results={testResults}></RecipeResults>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
