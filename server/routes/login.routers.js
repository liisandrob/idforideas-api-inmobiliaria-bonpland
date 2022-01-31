const { Router } = require('express');
const router = Router();

const login = require('../controllers/loginControllers');

router.post('/', login.signIn);

module.exports = router;