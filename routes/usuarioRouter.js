const usuarioControoler = require('./../controllers/usuarioController')
// const auth = require('../middlewares/auth')

class UsuarioRoute {

    constructor(app) {

        app.route('/usuarios')
            .get(usuarioControoler.buscarTodos)
            .post(usuarioControoler.adicionar)
            .put(usuarioControoler.editar)

        app.route('/usuarios/:id')
            .delete(usuarioControoler.deletar)

        app.route('/usuarios/busca')
            .get(usuarioControoler.buscarPorNome)

        app.route('/autenticar')
            .post(usuarioControoler.autenticar)
    }
}

module.exports = UsuarioRoute