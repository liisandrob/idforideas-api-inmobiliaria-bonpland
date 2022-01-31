const express = require('express');
const morgan  = require('morgan');
const helmet  = require('helmet');
const cors    = require('cors');

require('dotenv').config();

const { notFound, errorHandler } = require('./middlewares/middlewares');
const property = require('./routes/property.routers');
const login = require('./routes/login.routers');
require('./database.js');

const app = express();

//Middlewares
app.use(morgan(process.env.NODE_ENV === 'production' ? ' commin' : 'dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

//Rutas

app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a Inmobiliaria Bonpland!'
  });
});

app.use('/login', login);
app.use('/property', property);

app.use(notFound);
app.use(errorHandler);

// Encendido de servidor
const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});