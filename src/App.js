import logo from "./logo.svg";
import "./App.css";
import RecipeResults from "./pages/recipe-results.js";
import Survey from "./pages/surveyPage.js";
function App() {
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
}

export default App;
