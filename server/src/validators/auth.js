const { check } = require('express-validator')
const db = require('../db')
const {compare} = require('bcryptjs')

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

const loginFieldsCheck = check('email').custom(
    async (value, {req}) => {

        const user = await db.query('SELECT * from users where email = $1', [value])
        
        if(!user.rows.length){
            throw new Error('Email or Password is Invalid');
        }
        
        const validPassword = await compare(req.body.password, user.rows[0].password)

        if(!validPassword)
            throw new Error('Email or Password is Invalid');

        req.user = user.rows[0];
    }
)

module.exports = {
    registerValidation : [email, password, emailExists],
    loginValidation: [loginFieldsCheck],
}