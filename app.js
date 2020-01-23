const Express = require('express');
const Cors = require('cors');
const Mongoose = require('mongoose');

const env = process.NODE_ENV || 'development'
const config = require('./config.json')[env]

//Importações dos modelos
const Plano = require('./models/Plano')
const Usuario = require('./models/Usuario')

class App {

  constructor() {
    this.app;
  }

  //Método para inicializar o objeto do Express
  init() {

    //Instanciar o express
    this.app = Express();

    //Conversor JSON-ObjetoJS
    this.app.use(Express.json())
    this.app.use(Cors())

    //Conectando com o banco mLab
    Mongoose.connect("mongodb+srv://brasilnw:brasilnw@cluster0-qirw1.gcp.mongodb.net/test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
     

    })

    //Instanciando os modelos
    new Plano()
    new Usuario()


    //Importações das rotas
    const planosRouter = require('./routes/planosRouter')
    const usurioRouter = require('./routes/usuarioRouter')



    //Instanciar a minha rotas
    //Rota de Convidados
    new planosRouter(this.app)

    new usurioRouter(this.app)



    //Rota Raíz
    this.app.get('/', function (req, res) {
      res.send('Bem-vindo a API - Brasil Networks!')
    })

    //Listen
    this.app.listen(process.env.PORT || config.port, () => {
      console.log('API - Brasil Networks rodando na porta: ' + config.port)
    })

  }
}

new App().init()
