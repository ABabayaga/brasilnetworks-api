const Mongoose = require('mongoose')

class Plano extends Mongoose.Schema {

    constructor() {

        super({
            planoname: {
                type: String
            },
            // planoname: {
            //     type: Mongoose.Schema.Types.ObjectId,
            //     ref: 'Planos',
            //     required: false
            // },
            descricao: {
                type: String
            },
            valor: {
                type: Number
            },
            taxa: {
                type: String
            }
            
        })
        Mongoose.model('Plano', this)
    }
}

module.exports = Plano