const mongoose = require('mongoose')

const conectarComMongoDB = function(){
    mongoose.Promise = global.Promise

    const host = process.env.DB_HOST
    const port = process.env.DB_PORT
    const database = process.env.DB_DATABASE
    mongoose.connect('mongodb://' + host + ':' + port + '/' + database)
}

module.exports = {
    conectarComMongoDB
}