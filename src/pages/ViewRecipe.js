import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import {
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
} from '@material-ui/core'
import RecipesContext from '../components/RecipesContext'
import { withStyles } from '@material-ui/core'
import { withRouter, Link, Redirect } from 'react-router-dom'
import axios from 'axios'

const styles = {
  card: {
    '&:hover': {
      opacity: 1,
      transform: 'scale(1)',
    },
    transform: 'scale(.8)',
  },
  mobileMenu: {
    '@media (max-width:600px)': {
      display: 'block',
    },
  },
  desktopMenu: {
    '@media (min-width:600px)': {
      display: 'flex',
    },
  },
}

class ViewRecipes extends React.Component {
  state = {
    recipe: {},

    otherOptions: [],
    redirect: '',

    open: false,
  }

  static contextType = RecipesContext
  componentDidMount() {
    const { recipes } = this.context
    const { id } = this.props.match.params

    axios
      .get(`https://api.spoonacular.com/recipes/${id}/information`, {
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        const recipe = res.data
        this.setState({ recipe: recipe })
        console.log(recipe)
      })

    return axios
      .get(`https://api.spoonacular.com/recipes/${id}/similar`, {
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        const similarRecipe = res.data
        this.setState({ otherOptions: similarRecipe })
        console.log(similarRecipe)
      })
  }

  render() {
    const modalStyle = {
      width: '400px',
      height: '400px',
      background:
        'linear-gradient(90deg, rgba(42,204,33,0.9220063025210083) 0%, rgba(46,204,65,1) 35%, rgba(35,157,86,1) 100%)',
      color: 'white',
      boxShadow: '5px 10px 8px',
      align: 'center',
      borderRadius: '20px',
    }
    const { classes } = this.props
    const mainRecipe = {
      margin: 'auto',
      width: 'auto',
      marginBottom: '30px',
      marginTop: '30px',
      display: 'flex',
    }

    const cardStyles = {
      width: '300px',
      marginRight: '30px',
      background: 'lightRed',
      marginBottom: '20px',
      boxShadow: '5px 10px 8px #888888',
      border: '1px solid green',
    }

    const imageStyes = {
      height: '100%',
      width: '100%',
    }

    if (this.state.redirect) {
      return <Redirect push to={`/view-recipe/${this.state.redirect}`} />
    }

    const handleOpen = () => {
      this.setState({ open: true })
    }

    const handleClose = () => {
      this.setState({ open: false })
    }

    return (
      <RecipesContext.Consumer>
        {({ recipes, setRecipes }) => (
          <div key={this.state.recipe.id}>
            <Grid
              className={classes.mobileMenu}
              container
              justify='center'
              align='center'
            >
              <Grid item xs={6} md={6} lg={4}>
                <CardContent>
                  <Typography
                    style={{ fontFamily: 'Kalam, cursive' }}
                    variant='h3'
                    component='h3'
                  >
                    {this.state.recipe.title}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={10} justify='center'>
                <Card style={mainRecipe} className={classes.mobileMenu}>
                  <Grid style={{ width: 'maxwidth' }} item md={6} xs={6}>
                    <img
                      src={this.state.recipe.image}
                      alt={this.state.recipe.title}
                      style={imageStyes}
                    ></img>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Box
                      style={{
                        padding: '20px 10px 0px 10px',
                        // marginBottom: '10px',
                        background:
                          'linear-gradient(90deg, rgba(42,204,33,0.4542191876750701) 0%, rgba(46,204,65,0.47102591036414565) 35%, rgba(35,157,86,0.36738445378151263) 100%)',
                        color: 'black',
                        height: '100%',
                        width: '100%',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{ padding: '10px 20px 5px 10px' }}
                        dangerouslySetInnerHTML={{
                          __html: this.state.recipe.summary,
                        }}
                      />
                    </Box>
                  </Grid>
                </Card>
                <Link style={{ textDecoration: 'none' }} to='/recipe-results'>
                  <Button
                    style={{ color: 'green', marginBottom: '30px' }}
                    variant='outlined'
                  >
                    BACK TO RESULTS
                  </Button>
                </Link>
              </Grid>

              <Grid container spacing='3' justify='center' align='center'>
                <Grid item xs={12}>
                  <Typography
                    style={{
                      color: 'black',
                      fontFamily: 'Kalam, cursive',
                      fontWeight: '450',
                    }}
                    variant='h3'
                    component='h2'
                  >
                    Similar Recipes
                  </Typography>
                </Grid>
                {this.state.otherOptions.map((options) => {
                  return (
                    <Card
                      className={classes.card}
                      style={cardStyles}
                      elevation={3}
                      key={options.id}
                    >
                      <CardActionArea>
                        <CardMedia
                          image={`https://spoonacular.com/recipeImages/${options.id}-480x360.${options.imageType}`}
                          style={{
                            height: '250px',
                          }}
                        ></CardMedia>

                        <CardContent>
                          <Typography>{options.title}</Typography>
                          {options.summary}
                        </CardContent>
                      </CardActionArea>

                      <Button
                        style={{
                          marginBottom: '20px',
                          background:
                            'linear-gradient(90deg, rgba(42,204,33,0.9220063025210083) 0%, rgba(46,204,65,1) 35%, rgba(35,157,86,1) 100%)',
                          fontFamily: 'Kalam, cursive',
                          fontWeight: '800',
                        }}
                        variant='contained'
                        color='secondary'
                        type='button'
                        onClick={handleOpen}
                        // onClick={() => {
                        // 	this.setState({ redirect: options.id });
                      >
                        View Recipe
                      </Button>
                      <Grid item xs={12}>
                        <Modal
                          style={modalStyle}
                          open={this.state.open}
                          onClose={handleClose}
                          aria-labelledby='simple-modal-title'
                          aria-describedby='simple-modal-description'
                        >
                          <h1>HELLO WORLD TESTING</h1>
                        </Modal>
                      </Grid>
                    </Card>
                  )
                })}
              </Grid>
            </Grid>
          </div>
        )}
      </RecipesContext.Consumer>
    )
  }
}
export default withStyles(styles)(withRouter(ViewRecipes))
