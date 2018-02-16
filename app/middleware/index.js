const cors = require('./cors')
const bodyParser = require('body-parser')

const corsUniversal = cors.retornarCorsUniversal
const bodyParserUrlEncoded = bodyParser.urlencoded({extended: true})
const bodyParserJson = bodyParser.json()

module.exports = {
    corsUniversal,
    bodyParserUrlEncoded,
    bodyParserJson
}