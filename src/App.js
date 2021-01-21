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
<<<<<<< HEAD
  //these are test items. Delete when the program is working.
  let testResults = [
    {
      name: "Recipe 1",
      description: "One",
      picture:
        "https://valentinascorner.com/wp-content/uploads/2020/07/Shrimp-Ceviche-Recipe-3.jpg",
    },
    {
      name: "Recipe 2",
      description: "Two",
      picture:
        "https://therecipecritic.com/wp-content/uploads/2015/10/porcupinemeatballs-650x975.jpg",
    },
    {
      name: "Recipe 3",
      description: "Three",
      picture:
        "https://sweetandsavorymeals.com/wp-content/uploads/2019/05/Grilled-Eggplant-Recipe-4.jpg",
    },
  ];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}
      <RecipeResults results={testResults}></RecipeResults>
      <Survey />
    </div>
  );
=======
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
>>>>>>> d0b4dc2a85a7da804f40cabc83b025387947bdbd
}

export default App;
