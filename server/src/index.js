const express = require('express')
const { PORT, CLIENT_URL } = require('./constants')
const app = express()
const cookieParser = require('cookie-parser')
const passport = require('passport')
const authRoutes = require('./routes/auth')
const cors = require('cors')

require('./middlewares/passport-middleware')

app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: CLIENT_URL, credentials: true}))
app.use(passport.initialize())


app.use('/api', authRoutes)

const startApp = () => {
    try{
        app.listen(PORT, () => {
            console.log(`The app is running at http://localhost:${PORT}/`)
        })
    } catch (error) {
        console.log (`Error: ${error.message}`)
    }
}
 
startApp()