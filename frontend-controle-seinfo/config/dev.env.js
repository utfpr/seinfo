'use strict'
const merge = require('webpack-merge')

const prodEnv = require('./prod.env')
const dotEnv = require('./dotenv.env')

module.exports = merge(prodEnv, dotEnv, {
  NODE_ENV: '"production"',
})
