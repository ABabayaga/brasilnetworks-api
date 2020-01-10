const mongoose = require('mongoose');


class Usuario extends mongoose.Schema {

    constructor(){

        super({
            ativo: {
                type: Boolean
            },
            username: {
                type: String
            },
            senha: {
                type: String
            },
            tipo: { 
                type: String
            }
        }); 
        mongoose.model('Usuario', this);
    }
}

module.exports = Usuario;