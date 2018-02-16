require('./database')

const server = require('./server')
const services = require('./services')

services(server)