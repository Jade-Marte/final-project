import logo from './logo.svg';
import './App.css';
import RecipeResults from './pages/recipe-results.js';
import NavBar from './NavBar.js';
import React from 'react';
import Survey from './pages/surveyPage.js';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from 'react-router-dom';
function App() {
	//these are test items. Delete when the program is working.
	let testResults = [
		{
			name: 'Recipe 1',
			description: 'One',
			picture:
				'https://valentinascorner.com/wp-content/uploads/2020/07/Shrimp-Ceviche-Recipe-3.jpg',
		},
		{
			name: 'Recipe  2',
			description: 'Two',
			picture:
				'https://therecipecritic.com/wp-content/uploads/2015/10/porcupinemeatballs-650x975.jpg',
		},
		{
			name: 'Recipe 3',
			description: 'Three',
			picture:
				'https://sweetandsavorymeals.com/wp-content/uploads/2019/05/Grilled-Eggplant-Recipe-4.jpg',
		},
	];
	return (
		<Router>
			<NavBar></NavBar>
			<div className="App">
				<Switch>
					<Route path="/surveyPage">
						<Survey />
					</Route>

					<RecipeResults results={testResults}></RecipeResults>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
