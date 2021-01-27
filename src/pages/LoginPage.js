import React, { Component } from 'react';
import {
	Grid,
	TextField,
	Button,
	Box,
	Typography,
	Snackbar,
	withStyles,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { validateUsername, validatePassword } from '../validators/login';
import { authContext as AuthContext } from '../components/Auth';

const styles = {
	loginContainer: {
		height: '100%',
	},
};

class LoginPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: {
				value: '',
				error: '',
			},
			password: {
				value: '',
				error: '',
			},
			snackbar: {
				open: false,
				error: '',
			},
		};
	}

	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: {
				value: event.target.value,
				error: '',
			},
		});
	};

	handleSnackbarClose = (_, reason) => {
		if (reason === 'clickaway') return;
		this.setState({ snackbar: { open: false } });
	};

	submitForm = async (event, ctx) => {
		event.preventDefault();

		const usernameError = validateUsername(this.state.username.value);
		if (usernameError) {
			this.setState({
				username: {
					...this.state.username,
					error: usernameError,
				},
			});
		}

		const passwordError = validatePassword(this.state.password.value);
		if (passwordError) {
			this.setState({
				password: {
					...this.state.password,
					error: passwordError,
				},
			});
		}

		if (usernameError || passwordError) return;

		const [res, body] = await ctx.signin(
			this.state.username.value,
			this.state.password.value
		);
		// TODO: implement login logic
		// const res = await fetch('http://localhost:4000/login', {
		//   method: 'POST',
		//   body: JSON.stringify({
		//     username: this.state.username.value,
		//     password: this.state.password.value,
		//   }),
		//   headers: {
		//     'Content-Type': 'application/json',
		//   },
		//   credentials: 'include',
		// })
		// const body = await res.json()

		// If there were validation errors, parse, then display them
		if (!res.ok && res.status === 400) {
			for (let error of body.errors) {
				this.setState({
					[error.field]: {
						value: this.state[error.field].value,
						error: error.message,
					},
				});
			}
			return;
		}

		// If there was no validation errors but the username or password was simply incorrect
		if (!res.ok && (res.status === 404 || res.status === 403)) {
			this.setState({
				snackbar: {
					open: true,
					message: body.message,
				},
			});
			return;
		}

		console.log(res, body);

		alert('This is where you logged in correcly! Hooray!');
	};

	render() {
		const { classes } = this.props;

		return (
			<AuthContext.Consumer>
				{(ctx) => (
					<Box my={5} className={classes.loginContainer}>
						<Grid
							container
							spacing={2}
							align="center"
							justify="center"
							direction="column"
						>
							<Snackbar
								open={this.state.snackbar.open}
								onClose={this.handleSnackbarClose}
								anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
							>
								<Alert onClose={this.handleSnackbarClose} severity="error">
									{this.state.snackbar.message}
								</Alert>
							</Snackbar>

							<form
								onSubmit={(event) => {
									this.submitForm(event, ctx);
								}}
							>
								<Grid item md={3} my={5}>
									<Box mb={2}>
										<Typography variant="h3" component="h3">
											Login
										</Typography>
									</Box>
									<Box mb={2}>
										<TextField
											variant="outlined"
											label="Username"
											id="username"
											name="username"
											required
											fullWidth
											value={this.state.username.value}
											onChange={this.handleInputChange}
											error={!!this.state.username.error}
											helperText={this.state.username.error}
										/>
									</Box>

									<Box mb={2}>
										<TextField
											variant="outlined"
											label="Password"
											id="password"
											name="password"
											type="password"
											required
											fullWidth
											value={this.state.password.value}
											onChange={this.handleInputChange}
											error={!!this.state.password.error}
											helperText={this.state.password.error}
										/>
									</Box>

									<Box>
										<Button
											variant="contained"
											color="primary"
											fullWidth
											type="submit"
											role="submit"
											style={{
												backgroundColor: 'rgba(35,157,86,1)',
												fontWeight: '600',
											}}
										>
											Login
										</Button>
									</Box>
								</Grid>
							</form>
						</Grid>
					</Box>
				)}
			</AuthContext.Consumer>
		);
	}
}

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default withStyles(styles, { withTheme: true })(LoginPage);
