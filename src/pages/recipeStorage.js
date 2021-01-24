import { Component } from "react";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const styles = (theme) => {
  return {
    media: {
      height: 160,
      width: 350,
    },
  };
};
class SavedRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [{ img: "/food-pics/25471.jpg", title: "Meal" }],
    };
  }
  // create a function to call the result the name should be componentDidMount
  // in the function Axios call the nodes/ API
  // .then
  //   this.setState(recipes: {Api}results)
  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.recipes.map((item) => {
          return (
            <Grid>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.img}
                    title={item.title}
                  ></CardMedia>
                  <CardContent>
                    <Typography varient="h2">{item.title}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SavedRecipes);
