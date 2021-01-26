import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { NavLink, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},

	appBar: {
		// background: '#2ECC71',
		background:
			'linear-gradient(90deg, rgba(42,204,33,0.9220063025210083) 0%, rgba(46,204,65,1) 35%, rgba(35,157,86,1) 100%)',
		color: 'white',
		boxShadow: '0px 0px 0px 0px',
		fontWeight: '600px',
	},

	btn: {
		textDecoration: 'none',
		color: 'white',
		marginRight: '7px',
		fontWeight: '200',
	},

	btnMenu: {
		textDecoration: 'none',
		color: 'black',
		marginRight: '7px',
		fontWeight: '200',
	},

	desktopMenu: {
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'block',
		},
	},

	mobileMenu: {
		'@media (min-width:960px)': {
			display: 'none',
		},
		// [theme.breakpoints.down('md')]: {
		// 	display: 'block',
		// },
	},
}));

export default function MenuAppBar() {
	const classes = useStyles();
	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const [menu, setMenu] = React.useState(true);
	const [anchorE2, setAnchorE2] = React.useState(null);
	const openMenu = Boolean(anchorE2);

	const handleChange = (event) => {
		setAuth(event.target.checked);
		setMenu(event.target.checked);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleMenu1 = (event) => {
		setAnchorE2(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleCloseMenu = () => {
		setAnchorE2(null);
	};

	return (
		<div>
			<FormGroup></FormGroup>
			<AppBar className={classes.appBar} position="sticky">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						<Link className={classes.btn} to="/survey">
							Recipe App
						</Link>
					</Typography>

					<div className={`${classes.desktopMenu}`}>
						<Button>
							<Link className={classes.btn} to="/surveyPage">
								Survey Page
							</Link>
						</Button>

						<Button>
							<Link className={classes.btn} to="/recipe-results">
								Recipe Page
							</Link>
						</Button>

						<Button>
							<Link className={classes.btn} to="/recipeStorage">
								Recipe Storage
							</Link>
						</Button>

						<Button>
							<Link className={classes.btn} to="/viewRecipes">
								Recipe View
							</Link>
						</Button>
					</div>

					{auth && (
						<div>
							<IconButton
								className={classes.mobileMenu}
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu1}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorE2}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={openMenu}
								onClose={handleCloseMenu}
							>
								<div className={classes.mobileMenu}>
									<MenuItem onClick={handleCloseMenu}>
										<Link className={classes.btnMenu} to="/survey">
											Survey Page
										</Link>
									</MenuItem>
									<MenuItem onClick={handleCloseMenu}>
										<Link className={classes.btnMenu} to="/recipe-results">
											Recipe Page
										</Link>
									</MenuItem>
								</div>
							</Menu>
						</div>
					)}
					{/* </Button> */}
					<Button>
						<Link className={classes.btn} to="login">
							Login
						</Link>
					</Button>

					{auth && (
						<div>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={open}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Sign Up</MenuItem>
								<MenuItem onClick={handleClose}>Log Out</MenuItem>
							</Menu>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}
