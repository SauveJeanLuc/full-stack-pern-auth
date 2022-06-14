const {Pool} = require('pg')
const {USER, HOST, DATABASE, PASSWORD,DATABASE_PORT} = require('../constants')


const pool = new Pool({
    user: USER,
    host: HOST,
    database: DATABASE,
    password: PASSWORD,
    port: DATABASE_PORT,
})

module.exports = {
    query: (text, params) => pool.query(text, params),
}