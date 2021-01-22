<<<<<<< HEAD
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
        "https://valentinascorner.com/wp-content/uploads/2020/07/Shrimp-Ceviche-Recipe-3.jpg",
    },
    {
      name: "Result 2",
      description: "Two",
      picture:
        "https://therecipecritic.com/wp-content/uploads/2015/10/porcupinemeatballs-650x975.jpg",
    },
    {
      name: "Result 3",
      description: "Three",
      picture:
        "https://sweetandsavorymeals.com/wp-content/uploads/2019/05/Grilled-Eggplant-Recipe-4.jpg",
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
=======
import React from 'react';
import NavBar from './NavBar.js';
import { Container } from '@material-ui/core'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import SurveyPage from './pages/surveyPage.js';
import RecipeResultsPage from './pages/recipe-results.js';


function App() {
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
	];

	return (
		<Router>
			<NavBar></NavBar>
			<Container maxWidth="lg" className="App">
				<Switch>
					<Route path="/survey">
						<SurveyPage />
					</Route>

					<Route path="/recipe-results">
						<RecipeResultsPage results={testResults} />
					</Route>
				</Switch>
			</Container>
		</Router>
	);
>>>>>>> 80112ac4ee1964d6ca5279299a7cbcabb35e2b9b
}

export default App;
