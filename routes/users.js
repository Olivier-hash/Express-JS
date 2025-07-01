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
// Alternative clean Express code
router.route("/:id")
.get((req,res)=>{
       res.send(`Get user with ID ${req.params.id}`)
})
.put((req,res)=>{
       res.send(`Update user with ID ${req.params.id}`)
})
.delete((req,res)=>{
       res.send(`delete user with ID ${req.params.id}`)
})



module.exports = router;    