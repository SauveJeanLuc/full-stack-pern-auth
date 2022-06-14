const {config} = require('dotenv')
config()

module.exports = {
    PORT : process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    SECRET: process.env.SECRET,
    USER: process.env.DATABASE_USER,
    HOST: process.env.HOST,
    DATABASE: process.env.DATABASE,
    PASSWORD: process.env.PASSWORD,
    DATABASE_PORT: process.env.DATABASE_PORT,
}