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

export default class ViewRecipes extends React.Component {
	state = {};

	render() {
		const mainRecipe = {
			margin: 'auto',
			maxWidth: '500',
			height: '310px',
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
					<div>
						<Grid container justify="center" align="center">
							<Grid item xs={12}>
								<CardContent>
									<Typography
										style={{ fontFamily: 'Kalam, cursive' }}
										variant="h3"
										component="h3"
									>
										{this.state.recipe.name}
									</Typography>
								</CardContent>
							</Grid>
							<Grid item md={8} justify="center">
								<Card style={mainRecipe}>
									<Grid
										style={{ width: 'maxwidth' }}
										item
										md={6}
										xs={10}
										lg={6}
									>
										<img
											src={this.state.recipe.image}
											alt={this.state.recipe.name}
											style={imageStyes}
										></img>
									</Grid>

									<Grid item xs={6}>
										<Box
											style={{
												padding: '10px',
												background:
													'linear-gradient(90deg, rgba(42,204,33,0.4542191876750701) 0%, rgba(46,204,65,0.47102591036414565) 35%, rgba(35,157,86,0.36738445378151263) 100%)',
												color: 'black',
												height: '100%',
												width: '100%',
												textAlign: 'center',
											}}
										>
											{' '}
											{this.state.recipe.nutritionalFacts}{' '}
										</Box>
									</Grid>
								</Card>
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
										<Card style={cardStyles} elevation={3}>
											<CardActionArea>
												<CardMedia
													image={options.similarRecipe.image}
													style={{
														height: '200px',
													}}
												></CardMedia>

												<CardContent>
													<Typography>{options.similarRecipe.name}</Typography>
													{options.similarRecipe.nutritional_facts}
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
export default withStyles(styles)(ViewRecipes);
