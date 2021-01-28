import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid } from "@material-ui/core";
import RecipeContext from "../components/RecipesContext";
import axios from "axios";
import { Link } from "react-router-dom";

class RecipeResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      setRecipes: (recipes) => {
        this.setState({ recipes });
      },
    };
  }
  getRecipe = (id) => {
    return axios
      .get(`https://api.spoonacular.com/recipes/${id}/information`)
      .then((res) => {
        return res.data;
      });
  };
  render() {
    return (
      <RecipeContext.Consumer>
        {({ recipes, setRecipes }) => (
          <Grid container>
            {/*} <Grid item xs={4.1}>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.xaF966Gpx9WWO1X81pirRwHaE8&pid=Api&P=0&w=231&h=155"
              style={{ width: "500px", height: "400px",paddingTop: "72px" }}
            ></img>
               </Grid>*/}
            <Grid item xs={12}>
              <Carousel index="1">
                {recipes.map((item, i) => (
                  <Item key={i} item={item} />
                ))}
              </Carousel>
            </Grid>
            {/*}  <Grid item xs={4.1}>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.KDFklMdaYEXT32cep3qqjgHaFR&pid=Api&P=0&w=216&h=155"
              style={{ width: "500px", height: "400px",paddingTop: "72px" }}
            ></img>
              </Grid>*/}
          </Grid>
        )}
      </RecipeContext.Consumer>
    );
  }
}
function Item(props) {
  const styles = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  };
  function Savedrecipe(id) {
    axios
      .post(
        process.env.REACT_APP_NODE_URL + "/saved-recipe",
        { recipeId: id },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
      });
  }
  return (
    <Paper style={styles}>
      <h2>{props.item.title}</h2>
      <img
        src={props.item.image}
        alt={props.item.title}
        style={{ height: "400px", width: "Auto" }}
      ></img>
      <p>{props.item.summary}</p>
      <Button
        onClick={() => {
          Savedrecipe(props.item.id);
        }}
      >
        save recipe
      </Button>
      <Button className="CheckButton">
        {" "}
        <Link to={`/view-recipe/${props.item.id}`}>Check it out!</Link>
      </Button>
    </Paper>
  );
}
export default RecipeResults;
