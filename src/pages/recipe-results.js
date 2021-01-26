import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid } from "@material-ui/core";

class RecipeResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Grid container>
        {/*} <Grid item xs={4.1}>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.xaF966Gpx9WWO1X81pirRwHaE8&pid=Api&P=0&w=231&h=155"
              style={{ width: "500px", height: "400px",paddingTop: "72px" }}
            ></img>
    </Grid>*/}
          <Grid item xs={12}>
            <Carousel index="1">
              {this.props.results.map((item, i) => (
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
        style={{ height: "400px", width:"Auto" }}
      ></img>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
export default RecipeResults;
