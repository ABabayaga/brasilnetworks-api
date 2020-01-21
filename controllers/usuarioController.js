'use strict'
const Mongoose = require('mongoose');
const Usuario = Mongoose.model("Usuario");
const jwt = require('jsonwebtoken')
// const auth = require('../middlewares/auth')

//FUNÇÕES AUXILIARES
const createUserToken = (planoId) => {
    return jwt.sign({ id: planoId }, 'batatafrita2019', { expiresIn: '7d' });
}

class UsuarioController {

    static async buscarTodos(req, res) {

        try {
            res.json(await Usuario.find({}));
        } catch (error) {
            res.status(500).send(`Erro ao buscar usuários: ${error}`);
        }
    }

    static async buscarPorNome(req, res) {
        try {
            let objBusca = req.body
            res.json(await Convidado.find(objBusca));
        } catch (error) {
            res.status(500).send(`Erro ao buscar convidado por nome: ${error}`)
        }
    }

    static async adicionar(req, res) {
        // try {
        //     let usuarioNovo = req.body
        //     res.json(await Usuario.create({usuarioNovo, token:createUserToken(usuarioNovo.id)}))

        // } catch (error) {
        //     res.status(500).send(`Erro ao salvar usuário: ${error}`);
        // }

        const { username, senha} = req.body;
        if (!username || !senha) return res.send({ error: 'Dados insuficientes!' });

        try {
            if (await Usuario.findOne({ username })) return res.send({ error: 'Usuário já registrado!' });

            const user = await Usuario.create(req.body);
            user.password = undefined;

            return res.send({ user, token: createUserToken(user.id) });
        }
        catch (err) {
            return res.send({ error: 'Erro ao buscar usuário!' });
        }

    }

    static async editar(req, res) {
        try {
            let usuarioEdicao = req.body
            res.status(200).json(await Usuario.findByIdAndUpdate(usuarioEdicao._id, usuarioEdicao))

        } catch (error) {
            res.status(500).send(`Erro ao editar o usuário: ${error}`);
        }
    }

    static async deletar(req, res) {
        try {
            let id = req.params.id
            let objDeletar = {}
            objDeletar._id = id

            res.status(200).json(await Usuario.findByIdAndDelete(objDeletar))
        } catch (error) {
            res.status(500).send(`Erro ao remover usuário: ${error}`)
        }
    }

    static async autenticar(req, res) {
        try {
            let objUsuario = req.body
            res.json(await Usuario.find(objUsuario));
        } catch (error) {
            res.status(500).send(`Erro ao logar no sistema: ${error}`)
        }
    }
}

module.exports = UsuarioController;