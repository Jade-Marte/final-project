import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/card';
import {
	Button,
	CardActionArea,
	CardContent,
	CardMedia,
} from '@material-ui/core';

export default class ViewRecipes extends React.Component {
	state = {
		recipe: {
			name: 'Recipe Name',
			image:
				'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
			recipe: ' ',
			nutritionalFacts:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.  ',
		},
		otherOptions: [
			{
				similarRecipe: {
					name: '',
					image:
						'https://c.ndtvimg.com/2020-01/dd46j918_chilli-chicken_625x300_21_January_20.jpg',
					recipe: '',
					nutritional_facts:
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,',
				},
			},
			{
				similarRecipe: {
					name: '',
					image:
						'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*',

					recipe: '',
					nutritional_facts:
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,',
				},
			},
			{
				similarRecipe: {
					name: ' ',
					image:
						'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg',
					recipe: '',
					nutritional_facts:
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, ',
				},
			},
		],
	};

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
		};

		const imageStyes = {
			height: '100%',
			width: '100%',
		};

		return (
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
							<Grid style={{ width: 'maxwidth' }} item md={6} xs={10} lg={6}>
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
									fontWeight: '500px',
								}}
								variant="h3"
								component="h2"
							>
								Similar Recipe
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
		);
	}
}
