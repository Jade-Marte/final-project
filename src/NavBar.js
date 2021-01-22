import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
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
		background: '#2ECC71',
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
}));

export default function MenuAppBar() {
	const classes = useStyles();
	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleChange = (event) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<FormGroup></FormGroup>
			<AppBar className={classes.appBar} position="sticky">
				<Toolbar>
					<Typography variant="h5" className={classes.title}>
						Recipe App
					</Typography>
					<Button>
						<Link className={classes.btn} to="/survey">
							Survey Page
						</Link>
<<<<<<< Updated upstream
					</Button>
					<Button>
						<Link className={classes.btn} to="/recipe-results">
							Recipe Page
						</Link>
					</Button>
=======
					</Typography>

					<div className={`${classes.desktopMenu}`}>
						<Button>
							<Link className={classes.btn} to="/survey">
								Survey Page
							</Link>
						</Button>
						<Button>
							<Link className={classes.btn} to="/recipe-results">
								Recipe Page
							</Link>
						</Button>
						<Button>
							<Link className={classes.btn} to="/viewRecipes">
								View Recipes
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
									<MenuItem onClick={handleCloseMenu}>
										<Link className={classes.btnMenu} to="/ViewRecipes">
											View Recipes
										</Link>
									</MenuItem>
								</div>
							</Menu>
						</div>
					)}
>>>>>>> Stashed changes

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
								<MenuItem onClick={handleClose}>Log Out</MenuItem>
							</Menu>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}
