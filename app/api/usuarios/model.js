const restful = require('node-restful')
const mongoose = restful.mongoose

const schema = new mongoose.Schema(
    {
        email: {type: String, require: true},
        senha: {type: String, require: true}
    },
    {
        versionKey: false
    }
)

module.exports = restful.model('usuarios', schema)