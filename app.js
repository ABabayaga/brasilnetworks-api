const Express = require('express');
const Cors = require('cors');
const Mongoose = require('mongoose');

const env = process.NODE_ENV || 'development'
const config = require('./config.json')[env]

//Importações dos modelos
const Plano = require('./models/Plano')
const Usuario = require('./models/Usuario')

// const app = Express();
// app.use(Cors());

// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// Habilita o CORS
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   next();
// });


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


    // Habilita o CORS
    // this.app.use(function (req, res, next) {
    //   res.header('Access-Control-Allow-Origin', '*');
    //   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    //   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    //   next();
    // });

    // this.app.use(function(request, response, next) {
    //   response.header("Access-Control-Allow-Origin", "*");
    //   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //   next();
    // });



    //Conectando com o banco mLab
    Mongoose.connect(`mongodb+srv://brasilnw:brasilnw@cluster0-w4nfq.gcp.mongodb.net/test?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      reconnectTries: 30,
      reconnectInterval: 500, // in ms

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
