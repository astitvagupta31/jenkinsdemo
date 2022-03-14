import express from "express";

const app = express()

app.get("/", (req,res)=>{
    console.log("I AM IN THE ROOT PATH")
    res.send("<h1>WELCOME TO THE NODE APP</h1>")
})

app.get("/about",(req,res)=>{
    console.logs("About page logged in the logs")
    res.send("<h1>This is about page</h1>")
})

app.listen(3000);