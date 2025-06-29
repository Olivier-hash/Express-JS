const express = require('express')
const app = express()

app.get('/', (req,res) =>{
    console.log('Here');
    res.sendStatus(5000)
})

app.listen(4000)