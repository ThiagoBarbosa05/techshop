const {checkSchema} = require('express-validator')

module.exports = {
  signup: checkSchema({
    name: {
      trim: true,
      isLength: {
        options: {min: 2}
      },
      errorMessage: 'name must be at least 2 characters'
    },
    email: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'invalid email'
    },
    password: {
      isLength: {
        options: {
          min: 6
        }
      },
      errorMessage: 'password must be at least 2 characters'
    }
  })
}