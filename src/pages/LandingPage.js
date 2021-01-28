//
import { Container, Typography, Box, Fade, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({
	container: {
		position: 'relative',
		marginBottom: '0px',
		marginRight: '0px',
		height: '100vh',
		padding: '0px !important',
	},
	text: {
		fontSize: '100px',
		color: 'white',
	},
	title: {
		fontWeight: '600',
		background:
			'-webkit-linear-gradient(90deg,  rgba(42,204,33,1) 55%, rgba(27,111,62,1) 80%, rgba(55,245,77,0.989233193277311) 100%);',

		'-webkit-background-clip': 'text',
		'-webkit-text-fill-color': 'transparent',
		width: 'fullwidth',
		fontSize: '72px',
		wordWrap: 'break-word',
		[theme.breakpoints.down('sm')]: {
			fontSize: '40px',
		},
	},
	overlay: {
		backgroundColor: 'rgba(20, 20, 20, 0.7)',
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},

	button: {
		marginRight: '20px',
		background:
			'linear-gradient(90deg, rgba(42,204,33,0.9220063025210083) 0%, rgba(46,204,65,1) 35%, rgba(35,157,86,1) 100%)',
		color: 'white',
		opacity: 1,
		'&:hover': {
			opacity: 0.8,
		},
		transition: 'opacity 200ms',

		textDecoration: 'none',
	},

	signUpButton: {
		marginRight: '20px',
		fontWeight: '300',
		color: 'rgba(42,204,33,0.9220063025210083)',
		opacity: 1,
		border: '1px solid rgba(42,204,33,0.9220063025210083)',
		'&:hover': {
			background:
				'linear-gradient(90deg, rgba(42,204,33,0.9220063025210083) 0%, rgba(46,204,65,1) 35%, rgba(35,157,86,1) 100%)',
			color: 'white',
			border: '0px',
		},
		transition: 'opacity 200ms',

		textDecoration: 'none',
	},
	subtitle: {
		fontSize: 40,
		fontFamily: 'Kalam, cursive',
		fontWeight: '450',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '30px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '20px',
		},
	},
}));

export default function LandingPage(props) {
	const items = [
		{
			image: '/food-pics/eat.jpg',
			description: 'WE SERVE UP GREAT RECIPES FOR ALL DIETS',
		},
		{
			image: '/food-pics/asparagus.jpg',
			description: 'FEED YOUR MEAT CRAVINGS',
		},
		{
			image: '/food-pics/piza.jpg',
			description: 'SCRUMPTIOUS DELIGHTS',
		},
		{
			image: '/food-pics/salmon.jpg',
			description: 'READY TO GO',
		},
		{
			image: '/food-pics/meal.jpg',
			description: 'HEALTHY OPTIONS',
		},
		{
			image: '/food-pics/smoothies.jpg',
			description: 'FRUITY DELIGHTS',
		},
	];

	return (
		<Carousel animation="slide" timeout="200">
			{items.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
}
function Item(props) {
	const classes = useStyles();
	return (
		<Box
			style={{
				backgroundImage: `url(${props.item.image})`,
				backgroundPosition: '100% center',
			}}
			className={classes.container}
		>
			<Box className={classes.overlay} textAlign="center">
				<Container maxWidth="sm" style={{ textAlign: 'center' }}>
					<Fade in={true} timeout={1000}>
						<Typography
							className={`${classes.text} ${classes.title}`}
							variant="h5"
							gutterBottom
							className={classes.title}
						>
							{props.title || 'Zesty Friendgredients'}
						</Typography>
					</Fade>
					<Fade in={true} timeout={200}>
						<Typography
							variant="body1"
							gutterBottom
							className={`${classes.text} ${classes.subtitle}`}
						>
							{props.item.description}
						</Typography>
					</Fade>
					<Link style={{ textDecoration: 'none' }} to="/register">
						{' '}
						<Button
							className={`${classes.signUpButton} ${classes.hover}`}
							type="Submit"
							variant="outlined"
							size="large"
						>
							Sign Up
						</Button>
					</Link>
					<Link style={{ textDecoration: 'none' }} to="/login">
						{' '}
						<Button
							className={classes.button}
							type="Submit"
							variant="contained"
							size="large"
						>
							Login{' '}
						</Button>
					</Link>{' '}
				</Container>
			</Box>
		</Box>
	);
}
