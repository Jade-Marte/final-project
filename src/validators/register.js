import { validateUsername, validatePassword } from './login'

function validatePasswordConfirmation(password, passwordConfirmation) {
  if (password !== passwordConfirmation) {
    return 'Passwords do not match'
  }

  return null
}

function validateEmail(email) {
  if (!email) {
    return 'Email is required'
  }

  return null
}

function validateFirstName(value) {
  if (value.length < 3) {
    return 'Must be at least 3 characters long'
  }

  if (value.length > 20) {
    return 'Cannot be more than 20 characters long'
  }

  return null
}

function validateLastName(value) {
  if (value.length < 3) {
    return 'Must be at least 3 characters long'
  }

  if (value.length > 20) {
    return 'Cannot be more than 20 characters long'
  }

  return null
}
export {
  validateUsername,
  validatePassword,
  validatePasswordConfirmation,
  validateEmail,
  validateFirstName,
  validateLastName,
}
