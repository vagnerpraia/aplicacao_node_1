const restful = require('node-restful')
const mongoose = restful.mongoose

const usuarioSchema = new mongoose.Schema({
    email: {type: String, require: true},
    senha: {type: String, require: true},
    flag: {type: Boolean, require: false, default: false}
})

module.exports = restful.model('Usuario', usuarioSchema)