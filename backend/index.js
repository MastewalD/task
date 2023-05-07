const express =require("express")
const mongoose =require("mongoose")
const app=express()
app.listen(port,()=>{
    console.log(`the server run on port ${port}`)
})