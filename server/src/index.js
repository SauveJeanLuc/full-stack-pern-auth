const express = require('express')
const { PORT } = require('./constants')
const app = express()
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())

const authRoutes = require('./routes/auth')



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