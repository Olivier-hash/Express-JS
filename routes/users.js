   const express = require('express')
   const router =  express.Router();


router.get("/", (req, res)=> {
        res.send("User List")
    })
router.get("/new", (req, res)=>{
        res.send("User New Form")
    })
router.post("/", (req,res)=>{
        res.send("Create New user")
})    
// Alternative clean Express code    express-
router.route("/:id")
.get((req,res)=>{
       console.log(req.user);
       
       res.send(`Get user with ID ${req.params.id}`)
})
.put((req,res)=>{
       res.send(`Update user with ID ${req.params.id}`)
})
.delete((req,res)=>{
       res.send(`delete user with ID ${req.params.id}`)
})

const users = [{name:"Kelly"}, {name: "Iradukunda"}]
router.param("id", (req,res,next,id) =>{
    req.user = users[id] 
    // console.log(id);
    next()
    
})


module.exports = router;   
//params it is meant parameter
// Node.js methods used with CRUD 
//  POST --> Create operation  
//  GET ---> Read operation  
//  PUT --> update operation 
//  Delete --> delete operation 