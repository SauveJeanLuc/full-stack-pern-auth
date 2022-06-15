const {Router} = require('express');
const { getUsers, register } = require('../controllers/auth');
const { validatorMiddleware } = require('../middlewares/auth-middleware');
const router = Router();

const {registerValidation} = require('../validators/auth')

router.get('/users', getUsers)
router.post('/register', registerValidation, validatorMiddleware, register)


module.exports = router