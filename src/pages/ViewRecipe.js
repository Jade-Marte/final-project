import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {
	Button,
	CardActionArea,
	CardContent,
	CardMedia,
} from '@material-ui/core';
import RecipesContext from '../components/RecipesContext';
import { withStyles } from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
const styles = {
	card: {
		'&:hover': {
			opacity: 1,
			transform: 'scale(1)',
		},
		transform: 'scale(.8)',
	},
};

class ViewRecipes extends React.Component {
	state = {
		recipe: {},
		otherOptions: [],
		redirect: '',
	};

	static contextType = RecipesContext;
	componentDidMount() {
		const { recipes } = this.context;
		const { id } = this.props.match.params;

		axios
			.get(`https://api.spoonacular.com/recipes/${id}/information`, {
				params: {
					apiKey: process.env.REACT_APP_API_KEY,
				},
			})
			.then((res) => {
				const recipe = res.data;
				this.setState({ recipe: recipe });
				console.log(recipe);
			});

		return axios
			.get(`https://api.spoonacular.com/recipes/${id}/similar`, {
				params: {
					apiKey: process.env.REACT_APP_API_KEY,
				},
			})
			.then((res) => {
				const similarRecipe = res.data;
				this.setState({ otherOptions: similarRecipe });
				console.log(similarRecipe);
			});
	}

	render() {
		const { classes } = this.props;
		const mainRecipe = {
			margin: 'auto',
			width: '200',
			height: '300px',
			marginBottom: '30px',
			marginTop: '30px',
			display: 'flex',
		};

		const cardStyles = {
			width: '300px',
			marginRight: '30px',
			background: 'lightRed',
			marginBottom: '20px',
			boxShadow: '5px 10px 8px #888888',
			border: '1px solid green',
		};

		const imageStyes = {
			height: '100%',
			width: '100%',
		};

		return (
			<RecipesContext.Consumer>
				{({ recipes, setRecipes }) => (
					<div key={this.state.recipe.id}>
						<Grid container justify="center" align="center">
							<Grid item xs={12} md={6} lg={4}>
								<CardContent>
									<Typography
										style={{ fontFamily: 'Kalam, cursive' }}
										variant="h3"
										component="h3"
									>
										{this.state.recipe.title}
									</Typography>
								</CardContent>
							</Grid>
							<Grid item xs={12}>
								<Card style={mainRecipe}>
									<Grid
										style={{ width: 'maxwidth' }}
										item
										md={6}
										xs={12}
										lg={6}
									>
										<img
											src={this.state.recipe.image}
											alt={this.state.recipe.title}
											style={imageStyes}
										></img>
									</Grid>
									<Grid item xs={12}>
										<Box
											style={{
												padding: '20px 10px 0px 10px',
												marginBottom: '10px',
												background:
													'linear-gradient(90deg, rgba(42,204,33,0.4542191876750701) 0%, rgba(46,204,65,0.47102591036414565) 35%, rgba(35,157,86,0.36738445378151263) 100%)',
												color: 'black',
												height: '100%',
												width: '100%',
												textAlign: 'center',
											}}
										>
											{/* {this.state.recipe.summary}
											 */}

											<div
												dangerouslySetInnerHTML={{
													__html: this.state.recipe.summary,
												}}
											/>
										</Box>
									</Grid>
								</Card>
								<Link style={{ textDecoration: 'none' }} to="/recipe-results">
									<Button
										style={{ color: 'green', marginBottom: '30px' }}
										variant="outlined"
									>
										{' '}
										BACK TO RESULTS
									</Button>
								</Link>
							</Grid>

							<Grid container spacing="3" justify="center" align="center">
								<Grid item xs={12}>
									<Typography
										style={{
											color: 'black',
											fontFamily: 'Kalam, cursive',
											fontWeight: '450',
										}}
										variant="h3"
										component="h2"
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
										>
											<CardActionArea>
												<CardMedia
													image={`https://spoonacular.com/recipeImages/${options.id}-480x360.${options.imageType}`}
													style={{
														height: '250px',
													}}
												></CardMedia>

												<CardContent>
													<Typography variant="h3">{options.title}</Typography>
													<Typography variant="h3">
														{options.summary}
													</Typography>
													<Typography>
														{' '}
														Time to prepare:{options.readyInMinutes} minutes
													</Typography>
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
												variant="contained"
												color="secondary"
												type="button"
											>
												View Recipe
											</Button>
										</Card>
									);
								})}
							</Grid>
						</Grid>
					</div>
				)}
			</RecipesContext.Consumer>
		);
	}
}
export default withStyles(styles)(withRouter(ViewRecipes));
