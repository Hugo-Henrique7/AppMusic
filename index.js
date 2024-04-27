const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();
const path = require('path');

const usuariosRouter = require('./src/routes/usuariosRouter');

// const PORT = 3000;

const app = express();

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(usuariosRouter);

app.listen(process.env.PORT, () => {
  console.log(`Running in PORT ${process.env.PORT}`);
});
