var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var planoModel = new Schema({
      nome : String,
      descricao : String,
      valor : Number,
      taxa: Number,
      ativo : { type: Boolean, default: true}
});

module.exports = mongoose.model("Produto",planoModel);