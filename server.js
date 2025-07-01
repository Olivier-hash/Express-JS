const express = require('express')
const app = express()

app.get('/', (req,res) =>{
    console.log('Here');
    res.status(500).send('Hi')
    //res.send("Hi") //it sends to the data to the client
})

app.listen(4000)