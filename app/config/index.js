//require('./exception')

//const global = require('./global')
//global(__dirname);

require('./database')

const server = require('./server')
const services = require('./services')

services(server)