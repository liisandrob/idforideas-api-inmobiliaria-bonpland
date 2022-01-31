const jwt = require('jsonwebtoken');
const { token } = require('morgan');

const loginController = {};

loginController.signIn = async function (req, res, next) {
  const { username, password } = req.body;

  try {
    const user = username === process.env.USER ? true : false;
    const pass = password === process.env.PASSWORD ? true : false;
  
    if(!(user && pass)) throw new Error('Usuario o password incorrectos');

    const userForToken = {
      username,
      page: 'Inmobiliaria Bonpland'
    }

    const token = jwt.sign(userForToken, process.env.SECRET)

    res.status(200).send({ 
      message: 'Sesión iniciada exitosamente', 
      user: username,
      token
    })
  } catch (error) {
    if (error.message === 'Usuario o password incorrectos') res.status(401);
    next(error)
  }
}

module.exports = loginController;