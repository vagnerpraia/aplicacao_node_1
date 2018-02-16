const mongoose = require('mongoose')

const conectarComMongoDB = function(){
    mongoose.Promise = global.Promise

    mongoose.connect('mongodb://localhost/aplicacao_node_1')
}

module.exports = {
    conectarComMongoDB
}