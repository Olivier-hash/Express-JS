const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(logger);

app.use(express.static("public"))            // install library by npm i ejs   //text
                                            // render method takes two parameter
                                           // passing text from server to ejs                                                                                                            app.get('/', (req,res) =>{
                                                                                                                                                                                        //     console.log('Here');
                                                                                                                                                                                        //     res.render("index", {text: "World"}) 
                                                                                                                                                                                                                // })

                                         //res.download("server.js")
                                        //res.json({ message: "Error"})  // json message to the server 
                                       //res.send("Hi") //it sends to the data to the client


const userRouter = require('./routes/users')


app.use('/users', userRouter)    // this app.use() function is for linking Routes to particular path

// Middleware function :  is a function that runs during the request-response cycle. It can: Access the request (req) and response (res) objects.
function logger (req,res,next){
    console.log(req.originalUrl);
    next()
    
}

app.listen(4000)