const { check } = require('express-validator')
const db = require('../db')

const password = check('password').isLength({ min: 6, max: 15 }).withMessage('Password must be between 6 and 15 characters.');

const email = check('email').isEmail().withMessage('Email is invalid');
 
const emailExists = check('email').custom(
    async (value) => {
        const{ rows } = await db.query('SELECT * from users WHERE email = $1', [value])

        if(rows.length) {
            throw new Error('Email already exists')
        }
    }
)

module.exports = {
    registerValidation : [email, password, emailExists],
}