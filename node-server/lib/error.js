module.exports.formatValidationErrors = function (error) {
  const prettyErrors = error.inner.reduce((errors, innerError, index) => {
    errors.push({
      field: innerError.path,
      validation: innerError.type,
      message: error.errors[index]
    })

    return errors
  }, [])

  const prettyErrorObj = {
    message: 'Validation Error',
    errors: prettyErrors
  }

  return prettyErrorObj
}