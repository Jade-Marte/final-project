import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  ButtonBase,
  Grid,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// class userList extends component {}
//
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 160,
    width: 350,
    display: "flex",
    // justifyContent: "space-between",
  },
  selecteditem: {
    border: "2px solid aqua",
  },
  selecteddiet: {
    border: "2px solid aqua",
  },
});

export default function Survey() {
  const [items, setItems] = useState([
    { img: "/food-pics/bananas-thumb-l.png", title: "Banana", selected: false },
    { img: "/food-pics/soy_info.jpg", title: "Soy", selected: false },
    {
      img: "/food-pics/testkitchen_argentinesteak.jpg",
      title: "Steak",
      selected: false,
    },
    {
      img: "/food-pics/Boiled-Corn-On-The-Cob-Recipe-720x405.jpg",
      title: "Corn",
      selected: false,
    },
    {
      img: "/food-pics/shelley-pauls-t4X660oKiYs-unsplash_mmpaih.jpg",
      title: "Beans",
      selected: false,
    },
    { img: "/food-pics/a-basket-of-eggs.jpg", title: "Eggs", selected: false },
    {
      img: "/food-pics/yam-sweet-potato-image-block.png",
      title: "Yam",
      selected: false,
    },
    { img: "/food-pics/moreecoliill.jpg", title: "Lettuce", selected: false },
    {
      img:
        "/food-pics/depositphotos_95914776-stock-photo-instant-soup-noddles-fast-food.jpg",
      title: "Noodles",
      selected: false,
    },
    {
      img: "/food-pics/tomatoes-1296x728-feature.jpg",
      title: "Tomatoes",
      selected: false,
    },
    {
      img: "/food-pics/tea-cup-bag-high-res-stock-photography-1570544677.jpg",
      title: "Tea",
      selected: false,
    },
    {
      img: "/food-pics/the-health-benefits-of-tofu-700-350-1550d79.jpg",
      title: "Tofu",
      selected: false,
    },
  ]);
  const [diets, setDiet] = useState([
    {
      img: "/food-pics/PF641SALADX1132-wc.jpg",
      title: "Vegetarian",
      selected: false,
    },
    {
      img: "/food-pics/25471.jpg",
      title: "Vegan",
      selected: false,
    },
    {
      img: "/food-pics/642x361_13_Dairy_Free_Dinner_Recipes-porkbunchan.jpg",
      title: "Non-Dairy",
      selected: false,
    },
    {
      img: "/food-pics/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg",
      title: "Meat Lover",
      selected: false,
    },
  ]);
  const [selectedItems, setSelectedItmes] = useState([]);
  function selectFood(title) {
    setItems(
      items.map((item) => {
        if (item.title === title) {
          return { ...item, selected: !item.selected };
        } else {
          return item;
        }
      })
    );
  }
  function selectDiet(title) {
    setDiet(
      diets.map((diet) => {
        if (diet.title === title) {
          return { ...diet, selected: !diet.selected };
        } else {
          return diet;
        }
      })
    );
  }
  let listStyle = {
    display: "flex",
    AlignItems: "center",
    // flexDirection: "row",
  };
  let style = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };
  const classes = useStyles();
  return (
    <div>
      <div style={style}>
        <Typography variant="h3">What is you favorite food?</Typography>
        <br></br>

        <Typography variant="h5">choose six out of tweleve</Typography>
      </div>
      <div style={listStyle}>
        <Grid container spacing={3}>
          {items.map((item) => {
            return (
              <Grid item xs={4}>
                <Card
                  className={`${classes.root} ${
                    item.selected ? classes.selecteditem : ""
                  }`}
                  key={item.title}
                >
                  <CardActionArea
                    onClick={() => {
                      selectFood(item.title);
                    }}
                  >
                    <CardMedia
                      className={classes.media}
                      image={item.img}
                      title={item.title}
                    ></CardMedia>
                    <CardContent>
                      <Typography gutterbuttom variant="h5" component="h3">
                        {item.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <div style={style}>
        <Typography variant="h3">What is your diet?</Typography>
      </div>
      <div style={listStyle}>
        <Grid container spacing={3}>
          {diets.map((diet) => {
            return (
              <Grid item xs={4}>
                <Card
                  className={`${classes.root} ${
                    diet.selected ? classes.selecteddiet : ""
                  }`}
                  key={diet.title}
                >
                  <CardActionArea
                    onClick={() => {
                      selectDiet(diet.title);
                    }}
                  >
                    <CardMedia
                      className={classes.media}
                      image={diet.img}
                      title={diet.title}
                    ></CardMedia>
                    <CardContent>
                      <Typography gutterbuttom variant="h5" component="h3">
                        {diet.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
