const {Router} = require('express');
const { getUsers, register, login } = require('../controllers/auth');
const { validatorMiddleware } = require('../middlewares/validations-middleware');
const router = Router();

const {registerValidation, loginValidation} = require('../validators/auth');

router.get('/users', getUsers)
router.post('/register', registerValidation, validatorMiddleware, register)
router.post('/login', loginValidation, validatorMiddleware, login)


module.exports = router;