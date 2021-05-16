let express = require('express')
let app = express()

app.get('/', (req,res) => {
    res.send('hello this is my app')
})

exports.cf_api = app;
