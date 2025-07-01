const express = require('express')
const app = express()

app.set('view engine', 'ejs')


app.get('/', (req,res) =>{
    console.log('Here');
    res.render("index", {text: "World"})   // install library by npm i ejs
                          // render method takes two parameter
                          // passing text from server to ejs

    //res.download("server.js")
    //res.json({ message: "Error"})  // json message to the server 
    //res.send("Hi") //it sends to the data to the client
})

const userRouter = require('./routes/users')


app.use('/users', userRouter)    // this app.use() function is for linking Routes to particular path


app.listen(4000)