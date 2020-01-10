const Mongoose = require('mongoose')

class Plano extends Mongoose.Schema {

    constructor() {

        super({
            planoname: {
                type: String
            },
            // planoname: {
            //     type: Mongoose.Schema.Types.ObjectId,
            //     ref: 'Planoss',
            //     required: false
            // },
            descricao: {
                type: String
            },
            valor: {
                type: String
            },
            taxa: {
                type: String
            }
            // disponivel: {
            //     type: Boolean,
                
            // }
            
        })
        Mongoose.model('Plano', this)
    }
}

module.exports = Plano