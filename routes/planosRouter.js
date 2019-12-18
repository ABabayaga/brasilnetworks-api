
const planosController = require('./../controllers/planosController')
class PlanoRoute {

    constructor(app) {

        // let contato = new ContatoController()

        app.route('/plano')
            .get(planosController.buscarTodos)
            .post(planosController.adicionar)
            // .put(planosController.editar)


        // app.route('/plano/cliente')
        //     .post(planosController.buscarPorCliente)


        // app.route('/contato/:id')

        //     .delete(contato.deletar)

    }
}

module.exports = PlanoRoute