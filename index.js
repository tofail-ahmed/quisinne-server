const express=require('express')
const app=express()
const port=5000
const chefs=require("./data/chef.json")
app.get('/',(req,res)=>{
      res.send("welcome to Quisinne De French")
})
app.get('/chefs',(req,res)=>{
      res.send(chefs)
})

app.listen(port,()=>{
      console.log(`Quisinne De French running on port ${port}`);
})