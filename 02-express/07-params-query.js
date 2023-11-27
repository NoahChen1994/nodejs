const express = require("express");
const app = express();
const {products} = require("./data/data");
app.get("/",((req,res)=>{
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
}))
app.get("/api/products",((req,res)=>{
    const newProducts = products.map(item =>{
        const {id,name,image} = item;
        return {id,name,image};
    })
    res.json(newProducts)
}))

app.get("/api/products/:id",((req,res)=>{
    const {id} = req.params;
    console.log(id);

    const product = products.find(item=>item.id === Number(id))
    if(!product){
        res.status(404).send("product not exist id:"+id.id);
    }
    res.json(product)
}))

app.get('/api/productId=:productID&reviewId=:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world1 ')
})

//api/v1/query?search=leather%20sofa&limit=10
app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]
  
    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search)
      })
    }
    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
      return res.status(200).json({ sucess: true, data: [] })
    }
    res.status(200).json(sortedProducts)
  })
  

app.listen(5000,()=>{
    console.log("server listen port 5000");
})