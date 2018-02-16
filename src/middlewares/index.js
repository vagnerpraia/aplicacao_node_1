const bodyParser = require('body-parser')
const cors = require('./cors')

module.exports = function(server){
    server.use(bodyParser.urlencoded({extended: true}))
    server.use(bodyParser.json())
    server.use(cors)
}