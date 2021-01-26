import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/paper';
import { shadows } from '@material-ui/system';
import Card from '@material-ui/core/Card';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

export default class ViewRecipes extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }
	state = {
		recipe: {
			name: 'Recipe',
			image:
				'https://valentinascorner.com/wp-content/uploads/2020/07/Shrimp-Ceviche-Recipe-3.jpg',
			recipe: 'a ',
			nutritionalFacts: ' ',
		},
		otherOptions: [
			{
				similarRecipe: {
					name: ' Recipe 1',
					image:
						'https://valentinascorner.com/wp-content/uploads/2020/07/Shrimp-Ceviche-Recipe-3.jpg',
					recipe: ['a', 'b'],
					nutritional_facts: 'What is Lorem Ipsum?',
				},
			},
			{
				similarRecipe: {
					name: ' Recipe 2',
					image:
						'https://valentinascorner.com/wp-content/uploads/2020/07/Shrimp-Ceviche-Recipe-3.jpg',

					recipe: 'a',
					nutritional_facts: 'What is Lorem Ipsum?',
				},
			},
			{
				similarRecipe: {
					name: ' Recipe 3',
					image:
						'https://www.expatica.com/app/uploads/sites/5/2020/03/Boeuf-bourguignon.jpg',
					recipe: 'a',
					nutritional_facts: ' What is Lorem Ipsum?',
				},
			},
		],

		setOpen: false,
		setClose: true,
	};

	render() {
		const paperStyles = {
			padding: 'theme.spacing(2)',
			margin: 'auto',
			maxWidth: '500',
			height: '300px',
			color: 'red',
			marginBottom: '10px',
			display: 'block',
		};

		const mainRecipe = {
			// margin: 'auto',
			maxWidth: '500',
			height: '310px',
			marginBottom: '30px',
			marginTop: '30px',
		};

		const boxStyles = {
			display: 'flex',
			// width: '400px',
			// height: '100%',
			borderRadius: 'borderRadius',
			flexWrap: 'wrap',
			justifyContent: 'center',
			boxShadow: '7',
			textAlign: 'center',
			marginRight: '10px',
		};
		const cardStyles = {
			width: '300px',
			marginRight: '10px',
			// background: 'red',
		};

		const handleOpen = () => {
			this.setState({ setOpen: true });
		};

		const handleClose = () => {
			this.setState({ setClose: false });
		};
		return (
			<div>
				<Grid container>
					<Grid item xs={8} justifycontent="center">
						<Paper style={mainRecipe}>
							<Typography>{this.state.recipe.name}</Typography>
							<img
								src={this.state.recipe.image}
								alt={this.state.recipe.name}
								style={{ height: '200px', width: '200px' }}
							></img>

							<Box> {this.state.recipe.recipe} </Box>
							<Box> {this.state.recipe.nutritionalFacts} </Box>
						</Paper>
					</Grid>
					<Grid container spacing="3">
						<Box style={boxStyles}>
							{this.state.otherOptions.map((options) => {
								return (
									<Paper style={cardStyles}>
										<Typography>{options.similarRecipe.name}</Typography>
										<br></br>
										<img
											src={options.similarRecipe.image}
											alt={options.similarRecipe.name}
											style={{
												height: '250px',
												width: '260px',
												borderRadius: '30px',
											}}
										></img>
										<br></br>
										{options.similarRecipe.recipe}
										{options.similarRecipe.nutritional_facts}
									</Paper>
								);
							})}
							;
						</Box>
					</Grid>
				</Grid>
			</div>
		);
	}
}

//  ViewRecipes;
