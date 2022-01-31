const jwt = require('jsonwebtoken');

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 400 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'Error' : error.stack,
  });
};

const checkToken = (req, rs, next) => {

  try {
    let token = req.headers.authorization;

    if (!token) throw new Error('Error de autenticación');
    token = token.split(' ');

    if(token[0] !== 'Bearer') throw new Error('Error de autenticación');
    token = jwt.verify(token[1], process.env.SECRET);
    
    if (!(token.username && token.username === process.env.USER && token.page === 'Inmobiliaria Bonpland')) throw new Error('Error de autenticación');
  } catch (error) {
    next(error);
  }
  
  next();
}

module.exports = {
  notFound,
  errorHandler,
  checkToken
};
