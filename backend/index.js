const express = require ("express")
const app = express()
const port = 5000
const session = require("express-session")
const passport = require("./config/passport")

app.use(express.json())



app.use(session( {
    secret: 'MyAwesomeSecret',
    resave: true,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())




app.listen(port, () => {
    console.log(`Serveur running at port ${port}`);
})
