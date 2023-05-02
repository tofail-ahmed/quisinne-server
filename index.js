const express=require('express')
const app=express()
const port=5000

app.get('/',(req,res)=>{
      res.send("welcome to Quisinne De French")
})
app.listen(port,()=>{
      console.log(`Quisinne De French running on port ${port}`);
})