'use strict'
const Mongoose = require('mongoose')
const Plano = Mongoose.model('Plano')
// const jwt = require ('jsonwebtoken')

//FUNÇÕES AUXILIARES
// const createPlanoToken = (userId) =>{
//     return jwt.sign({id: userId}, 'batatafrita2019', {expireIn: '7d'})
// }

class PlanoController {

    static async buscarTodos(req, res) {

        try {
            res.json(await Plano.find({}).populate('plano').exec())
        } catch (error) {
            // res.status(500).send('Erro ao buscar contatos: ${error}')
            res.status(500).send(`Erro ao buscar contato por nome: ${error}`)
        }
    }

   
    static async adicionar(req, res) {

        // try {
        //     let planoNovo = req.body
        //     res.json(await Plano.create(planoNovo))
        //     return res.send({token: createPlanoToken(plano.id)})
        // } catch (error) {
        //     // res.status(500).send('Erro ao salvar contato: ${error}')
        //     res.status(500).send(`Erro ao salvar plano: ${error}`)
        // }

        const { planoname, descricao, valor, taxa} = req.body;
        if (!planoname || !descricao || !valor || !taxa) return res.send({ error: 'Dados insuficientes!' });

        try {
            if (await Plano.findOne({ planoname })) return res.send({ error: 'Plano já registrado!' });

            const plano = await Plano.create(req.body);
            // user.password = undefined;

            return res.send(plano);
        }
        catch (err) {
            return res.send({ error: 'Erro ao buscar usuário!' });
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