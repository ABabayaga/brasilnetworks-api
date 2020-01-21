// const Express = require('express');
// const Cors = require('cors');

// const app = Express();
// app.use(Cors());


const planosController = require('./../controllers/planosController')
// const auth = require('../middlewares/auth')

class PlanoRoute {

    constructor(app) {

        // let contato = new ContatoController()

        app.route('/plano')
            .get(planosController.buscarTodos)
            .post(planosController.adicionar)
            .put(planosController.editar)

        // app.use('/', function (req, res, next) {
        //     res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
        //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        //     next();
        // });


        // app.route('/plano/cliente')
        //     .post(planosController.buscarPorCliente)


        // app.route('/contato/:id')

        //     .delete(contato.deletar)

    }
}

module.exports = PlanoRoute