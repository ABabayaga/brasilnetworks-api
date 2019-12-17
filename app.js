var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors')
var app = express()

app.use(cors())


app.get('/planos', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})


var planosRouter = require('./routes/planosRouter')

var app = express()
var router = express.Router()

var url = 'mongodb+srv://brasilnw:brasilnw@cluster0-w4nfq.gcp.mongodb.net/test?retryWrites=true&w=majority'
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  console.log('Conectado ao banco de dados planosdb MongoDB.')
});
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect(url);

app.listen(3000, function () {
    console.log('Servidor escutando na porta 3000');
});

app.use('/planos', planosRouter)

app.get('/', function (req, res) {
    res.send('Bem vindo ao Express!');
  });
  app.get('/plano', function (req, res) {
    res.send('respondento a solicitação em /plano');
  });

  // aplica as rotas em nossa aplicação
app.use('/', router);



