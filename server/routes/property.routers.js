const { Router } = require('express');
const router = Router();

const { checkToken } = require('../middlewares/middlewares')
const property = require('../controllers/propertyControllers');

router.get('/', property.get);
router.post('/', checkToken, property.registerProperty);
router.put('/:id', checkToken, property.editProperty);
router.delete('/:id', checkToken, property.deleteProperty);

module.exports = router;