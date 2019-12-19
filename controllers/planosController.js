'use strict'
const Mongoose = require('mongoose')
const Plano = Mongoose.model('Plano')

class PlanoController {

    static async buscarTodos(req, res) {

        try {
            res.json(await Plano.find({}).populate('plano').exec())
        } catch (error) {
            // res.status(500).send('Erro ao buscar contatos: ${error}')
            res.status(500).send(`Erro ao buscar contato por nome: ${error}`)
        }
    }

    // static async buscarPorCliente(req, res) {

    //     let objetoBusca = req.body

    //     try {
    //         res.json(await Plano.find({
    //             "cliente": objetoBusca
    //         }))
    //     } catch (error) {
    //         // res.status(500).send('Erro ao buscar contatos: ${error}')
    //         res.status(500).send(`Erro ao buscar contato por nome: ${error}`)
    //     }
    // }

    static async adicionar(req, res) {

        try {
            let planoNovo = req.body
            res.json(await Plano.create(planoNovo))
        } catch (error) {
            // res.status(500).send('Erro ao salvar contato: ${error}')
            res.status(500).send(`Erro ao salvar plano: ${error}`)
        }
    }

    static async editar(req, res) {
        try {
            let planoEdicao = req.body
            res.status(200).json(await Contato.findByIdAndUpdate(planoEdicao._id, planoEdicao))
        } catch (error) {
            res.status(500).send(`Erro ao editar o plano: ${error}`)
        }
    }

    

}

module.exports = PlanoController