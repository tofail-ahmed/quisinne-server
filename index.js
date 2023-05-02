const express=require('express')
const app=express()
const port=5000
const cors = require('cors');
const chefs=require("./data/chef.json")
app.use(cors());
app.get('/',(req,res)=>{
      res.send("welcome to Quisinne De French")
})
app.get('/chefs',(req,res)=>{
      res.send(chefs);
})
app.get('/chefs/:id', (req, res) => {
      const id = req.params.id
      console.log(id);
      if (id == 0) {
            res.send(chefs)
      } else {

            const selectedChef = chefs.find(chef => chef.chef_id == id)
            res.send(selectedChef)
      }
})
app.listen(port,()=>{
      console.log(`Quisinne De French running on port ${port}`);
})