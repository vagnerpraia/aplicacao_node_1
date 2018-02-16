const path = require('path')

require('./exception')

const global = require('./global')
const appPath = path.dirname(__dirname)
global(appPath);

require('./database')

const server = require('./server')

const services = require('./services')
services(server)