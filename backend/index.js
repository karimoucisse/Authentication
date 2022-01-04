const express = require("express")
const app = express()
const port = 5000
const session = require("express-session")
const admin = require("./routes/admin")
const authRoutes = require("./routes/auth")
const signup =  require("./routes/signup")
const passport = require("./config/passport")

const cors = require('cors')


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(express.json())



app.use(session( {
    secret: 'MyAwesomeSecret',
    resave: true,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRoutes, signup)
app.use('/admin', admin)
// app.use('./auth', )



app.listen(port, () => {
    console.log(`Serveur running at port ${port}`);
})



