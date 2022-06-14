const {Router} = require('express');
const { getUsers } = require('../controllers/auth');
const router = Router()

router.get('/', (req,res) => {
    return res.send('This works')
});

router.get('/determine', (req, res) =>{
    return res.send('Ambiguous')
})

router.get('/users', getUsers)


module.exports = router