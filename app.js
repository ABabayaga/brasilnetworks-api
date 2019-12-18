const Express = require('express');
const Cors = require('cors');
const Mongoose = require('mongoose');

//Importações dos modelos
const Plano = require('./models/Plano')

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
      Mongoose.connect(`mongodb+srv://brasilnw:brasilnw@cluster0-w4nfq.gcp.mongodb.net/test?retryWrites=true&w=majority`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false
      })

      //Instanciando os modelos
      new Plano()
    
      //Importações das rotas
      const planosRouter = require('./routes/planosRouter')
  

      //Instanciar a minha rotas
      //Rota de Convidados
      new planosRouter(this.app)
   

      //Rota Raíz
      this.app.get('/', function (req, res) {
          res.send('Bem-vindo a API - Brasil Networks!')
      })

      //Listen
      this.app.listen(3000, function(){
        console.log('API- Brasil Networks rodando na porta: 3000')
      } )

  }
}

new App().init()
