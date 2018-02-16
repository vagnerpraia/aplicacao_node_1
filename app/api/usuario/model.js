const obterModelo = function(){
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

    return restful.model('Usuario', schema)
}

module.exports = {
    obterModelo
}