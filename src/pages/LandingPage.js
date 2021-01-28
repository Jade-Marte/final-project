//
import { Container, Typography, Box, Fade, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import transitions from '@material-ui/core/styles/transitions';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
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
		fontWeight: '500',
		color: 'rgba(62,204,63,0.9)',
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
		opacity: 0.8,
		'&:hover': {
			opacity: 1,
		},
		transition: 'opacity 200ms',

		textDecoration: 'none',
	},

	subtitle: {
		fontSize: 30,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '30px',
	},
});

export default function LandingPage(props) {
	const classes = useStyles();
	return (
		<Box
			style={{
				backgroundImage: `url(${props.image || '/food-pics/eat.jpg'})`,
				backgroundPosition: '100% center',
			}}
			className={classes.container}
		>
			<Box className={classes.overlay} textAlign="center">
				<Container maxWidth="sm" style={{ textAlign: 'center' }}>
					<Fade in={true} timeout={1000}>
						<Typography
							className={`${classes.text} ${classes.title}`}
							variant="h2"
							gutterBottom
						>
							{props.title || 'Recipe App'}
						</Typography>
					</Fade>
					<Fade in={true} timeout={1500}>
						<Typography
							variant="body1"
							gutterBottom
							className={`${classes.text} ${classes.subtitle}`}
						>
							{props.description || 'We serve up great recipes for diets.'}
						</Typography>
					</Fade>
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
					<Link style={{ textDecoration: 'none' }} to="/register">
						{' '}
						<Button
							className={`${classes.button} ${classes.hover}`}
							type="Submit"
							variant="contained"
							size="large"
						>
							Sign Up
						</Button>
					</Link>
				</Container>
			</Box>
		</Box>
	);
}
