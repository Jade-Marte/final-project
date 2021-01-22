import React, { Component } from 'react'
import { Grid, TextField, Button, Box, Typography, withStyles } from '@material-ui/core'
import { validateUsername, validatePassword } from '../validators/login'

const styles = theme => ({
  loginContainer: {
    height: '100%'
  }
})

class LoginPage extends Component {

  constructor (props) {
    super(props)

    this.state = {
      username: {
        value: '',
        error: ''
      },
      password: {
        value: '',
        error: ''
      }
    }
  }
  
  handleInputChange = event => {
    this.setState(
      {[event.target.name]: {
        value: event.target.value,
        error: ''
      }}
    )
  }

  submitForm = event => {
    const usernameError = validateUsername(this.state.username.value)
    if (usernameError) {
      this.setState({
        username: {
          ...this.state.username,
          error: usernameError
        }
      })
    }

    const passwordError = validatePassword(this.state.password.value)
    if (passwordError) {
      this.setState({
        password: {
          ...this.state.password,
          error: passwordError
        }
      })
    }

    if (usernameError || passwordError) return 
    
    // TODO: implement login logic
    alert('This is where you logged in correcly! Hooray!')

    this.setState({
      username: {
        value: '',
        error: ''
      },
      password: {
        value: '',
        error: ''
      }
    })
  }

  render () {
    const { classes } = this.props

    return (
      <Box my={5} className={classes.loginContainer}>
        <Grid container spacing={2} align="center" justify="center" direction="column">
          <form>
            <Grid item md={3} my={5}>
              <Box mb={2}>
                <Typography variant="h3" component="h3">Login</Typography>
              </Box>
              <Box mb={2}>
                <TextField
                    variant="outlined"
                    label="Username"
                    id="username"
                    name="username"
                    required
                    fullWidth
                  />
              </Box>

              <Box mb={2}>
                <TextField
                  variant="outlined"
                  label="Password"
                  id="password"
                  name="password"
                  required
                  fullWidth
                />
              </Box>

              <Box>
                <Button variant="contained" color="primary" fullWidth>Login</Button>
              </Box>
            </Grid>
          </form>
        </Grid>
      </Box>
    )
  }

}
export default withStyles(styles, { withTheme: true })(LoginPage)