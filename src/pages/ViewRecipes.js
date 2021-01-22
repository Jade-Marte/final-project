import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/paper';
class ViewRecipes extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }
	state = {
		recipe: {
			name: '',
			image: '',
			recipe: ' ',
			nutritionalFacts: ' ',
		},
		similarRecipe: {
			name: '',
			image: '',
			recipe: '',
			nutritional_facts: '',
		},
		similarRecipe1: {
			name: '',
			image: '',
			recipe: '',
			nutritional_facts: '',
		},
		similarRecipe2: {
			name: '',
			image: '',
			recipe: '',
			nutritional_facts: '',
		},
	};

	render() {
		const paperStyles = {
			padding: 'theme.spacing(2)',
			margin: 'auto',
			maxWidth: '500',
			height: '300px',
		};

		const mainRecipe = {
			// margin: 'auto',
			maxWidth: '500',
			height: '310px',
			marginBottom: '30px',
			marginTop: '30px',
		};
		return (
			<div>
				<Grid item xs={8} justifycontent="center">
					<Paper style={mainRecipe}>
						<Typography>{this.state.recipe.name}</Typography>
						<Box> {this.state.recipe.image} </Box>
						<Box> {this.state.recipe.recipe} </Box>
						<Box> {this.state.recipe.nutritionalFacts} </Box>
					</Paper>
				</Grid>
				<Grid container spacing={3}>
					<Grid style={paperStyles} item xs>
						<Paper style={paperStyles}>
							<Box> {this.state.similarRecipe.name} </Box>
							<Box> {this.state.similarRecipe.image} </Box>
							<Box> {this.state.similarRecipe.recipe} </Box>
							<Box> {this.state.similarRecipe.nutritionalFacts} </Box>
						</Paper>
					</Grid>
					<Grid item xs>
						<Paper style={paperStyles}>
							<Box> {this.state.similarRecipe1.name} </Box>
							<Box> {this.state.similarRecipe1.image} </Box>
							<Box> {this.state.similarRecipe1.recipe} </Box>
							<Box> {this.state.similarRecipe1.nutritionalFacts} </Box>
						</Paper>
					</Grid>
					<Grid item xs>
						<Paper style={paperStyles}>
							<Box> {this.state.similarRecipe2.name} </Box>
							<Box> {this.state.similarRecipe2.image} </Box>
							<Box> {this.state.similarRecipe2.recipe} </Box>
							<Box> {this.state.similarRecipe2.nutritionalFacts} </Box>
						</Paper>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default ViewRecipes;
