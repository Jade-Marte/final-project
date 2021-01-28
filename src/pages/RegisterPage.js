import React, { Component } from 'react'
import {
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  withStyles,
} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import {
  validateUsername,
  validatePassword,
  validatePasswordConfirmation,
  validateFirstName,
  validateLastName,
} from '../validators/register'
import { authContext as AuthContext } from '../components/AuthContext'
import { Redirect } from 'react-router-dom'

const styles = {
  loginContainer: {
    height: '100%',
  },
}

class RegisterPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: {
        value: '',
        error: '',
      },
      email: {
        value: '',
        error: '',
      },
      password: {
        value: '',
        error: '',
      },
      password_confirmation: {
        value: '',
        error: '',
      },
      first_name: {
        value: '',
        error: '',
      },
      last_name: {
        value: '',
        error: '',
      },
      snackbar: {
        open: false,
        error: '',
      },
      redirect: false,
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: {
        value: event.target.value,
        error: '',
      },
    })
  }

  handleSnackbarClose = (_, reason) => {
    if (reason === 'clickaway') return
    this.setState({ snackbar: { open: false } })
  }

  submitForm = async (event, ctx) => {
    event.preventDefault()

    const firstNameError = validateFirstName(this.state.first_name.value)
    if (firstNameError) {
      this.setState({
        first_name: {
          ...this.state.first_name,
          error: firstNameError,
        },
      })
    }

    const lastNameError = validateLastName(this.state.last_name.value)
    if (lastNameError) {
      this.setState({
        last_name: {
          ...this.state.firlast_namest_name,
          error: lastNameError,
        },
      })
    }

    const usernameError = validateUsername(this.state.username.value)
    if (usernameError) {
      this.setState({
        username: {
          ...this.state.username,
          error: usernameError,
        },
      })
    }

    const passwordError = validatePassword(this.state.password.value)
    if (passwordError) {
      this.setState({
        password: {
          ...this.state.password,
          error: passwordError,
        },
      })
    }

    const confirmPasswordError = validatePasswordConfirmation(
      this.state.passwordConfirmation.value
    )
    if (confirmPasswordError) {
      this.setState({
        password_confirmation: {
          ...this.state.password_confirmation,
          error: confirmPasswordError,
        },
      })
    }

    if (
      firstNameError ||
      lastNameError ||
      usernameError ||
      passwordError ||
      confirmPasswordError
    )
      return

    const [res, body] = await ctx.signup({ ...this.state })

    // If there were validation errors, parse, then display them
    if (!res.ok && res.status === 400) {
      for (let error of body.errors) {
        this.setState({
          [error.field]: {
            value: this.state[error.field].value,
            error: error.message,
          },
        })
      }
      return
    }

    // If there was no validation errors but the username or password was simply incorrect
    if (!res.ok && (res.status === 404 || res.status === 403)) {
      this.setState({
        snackbar: {
          open: true,
          message: body.message,
        },
      })
      return
    }

    // TODO: redirect to survey page
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/survey' />
    }
    const { classes } = this.props

    return (
      <AuthContext.Consumer>
        {(ctx) => (
          <Box my={5} className={classes.loginContainer}>
            <Grid
              container
              spacing={2}
              align='center'
              justify='center'
              direction='column'
            >
              <Snackbar
                open={this.state.snackbar.open}
                onClose={this.handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              >
                <Alert onClose={this.handleSnackbarClose} severity='error'>
                  {this.state.snackbar.message}
                </Alert>
              </Snackbar>

              <form
                onSubmit={(event) => {
                  this.submitForm(event, ctx)
                }}
              >
                <Grid item md={3} my={5}>
                  <Box mb={2}>
                    <Typography variant='h3' component='h3'>
                      Register
                    </Typography>
                  </Box>
                  <Box mb={2}>
                    <TextField
                      variant='outlined'
                      label='First Name'
                      id='first_name'
                      name='first_name'
                      required
                      fullWidth
                      value={this.state.first_name.value}
                      onChange={this.handleInputChange}
                      error={!!this.state.first_name.error}
                      helperText={this.state.first_name.error}
                    />
                  </Box>

                  <Box mb={2}>
                    <TextField
                      variant='outlined'
                      label='Last Name'
                      id='last_name'
                      name='last_name'
                      required
                      fullWidth
                      value={this.state.last_name.value}
                      onChange={this.handleInputChange}
                      error={!!this.state.last_name.error}
                      helperText={this.state.last_name.error}
                    />
                  </Box>

                  <Box mb={2}>
                    <TextField
                      variant='outlined'
                      label='Username'
                      id='username'
                      name='username'
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
                      variant='outlined'
                      label='Password'
                      id='password'
                      name='password'
                      type='password'
                      required
                      fullWidth
                      value={this.state.password.value}
                      onChange={this.handleInputChange}
                      error={!!this.state.password.error}
                      helperText={this.state.password.error}
                    />
                  </Box>

                  <Box mb={2}>
                    <TextField
                      variant='outlined'
                      label='Confirm Password'
                      id='password_confirmation'
                      name='password_confirmation'
                      type='password'
                      required
                      fullWidth
                      value={this.state.password_confirmation.value}
                      onChange={this.handleInputChange}
                      error={!!this.state.password_confirmation.error}
                      helperText={this.state.password_confirmation.error}
                    />
                  </Box>

                  <Box>
                    <Button
                      variant='contained'
                      color='primary'
                      fullWidth
                      type='submit'
                      role='submit'
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
    )
  }
}

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

export default withStyles(styles)(RegisterPage)
