const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { errorHandler: queryErrorHandler } = require('querymen')
const { errorHandler: bodyErrorHandler } = require('bodymen')
const { env } = require('../../config');

module.exports =  (apiRoot, routes) => {	
  const app = express()

  app.use(cors())
  app.use(morgan('dev'))
    
  app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
  app.use(bodyParser.json({ limit: '20mb' }));
  app.use(apiRoot, routes)
  app.use(queryErrorHandler())
  app.use(bodyErrorHandler())

  return app
}
