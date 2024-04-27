const mongoose = require('mongoose');

const SchemaUser = mongoose.Schema({
  email: {
    type: String, required: true, minlenght: 3, maxlenght: 100,
  },
  senha: {
    type: String, required: true, minlenght: 8, maxlenght: 16,
  },
});

const MONGO_CONNECTION_URL = 'mongodb://127.0.0.1:27017/lofi';

mongoose.connect(MONGO_CONNECTION_URL)
  .then((data) => {
    console.log('Os dados do nosso banco de dados são:', data);
  }).catch((error) => {
    console.log('Houve um erro:', error);
  });

const db = mongoose.connection;
