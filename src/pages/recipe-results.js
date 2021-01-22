import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid } from "@material-ui/core";

class RecipeResults extends React.Component {
  constructor(props) {
    super(props);
  }
// This is just a test
  render() {
    return (
      <>
        <Grid container>
          <Grid item xs={4.1}>
            <Carousel>
              {this.props.results.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={4.1}>
            <Carousel>
              {this.props.results.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={4.1}>
            <Carousel>
              {this.props.results.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </>
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
  return (
    <Paper style={styles}>
      <h2>{props.item.name}</h2>
      <img
        src={props.item.picture}
        alt={props.item.name}
        style={{ width: "500px", height: "400px" }}
      ></img>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
export default RecipeResults;
