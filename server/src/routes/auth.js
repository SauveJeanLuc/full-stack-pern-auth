const {Router} = require('express');
const { getUsers, register, login, protected } = require('../controllers/auth');
const { validatorMiddleware } = require('../middlewares/validations-middleware');
const router = Router();
const {userAuth} = require('../middlewares/auth-middleware')

const {registerValidation, loginValidation} = require('../validators/auth');

router.get('/users', getUsers)
router.get('/protected',userAuth ,protected)
router.post('/register', registerValidation, validatorMiddleware, register)
router.post('/login', loginValidation, validatorMiddleware, login)


module.exports = router;