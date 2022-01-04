const express = require("express")
const app = express()
let users = require("../users.json")
const fs = require("fs")

app.post('/signup', (req, res) => {
    const {username, email} = req.body
    const verify = users.find(element => element.username === username || element.email === email)
    
    if(verify) {
        res.status(401).send("doublon")
    }else {
        const user = {id: (users.length + 1), ...req.body}
        users = [
            ...users,
            user
        ]
        res.json(user)
    }

})


module.exports = app