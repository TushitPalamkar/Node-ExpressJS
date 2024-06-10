const express =require('express')
const app=express()
const{products}=require('./data.js')
app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>')
})
app.get('/api/products',(req,res)=>{
    const newProduct=products.map((product)=>{
        const{id,name,image}=product;
        return{id,name,image};
    })
    res.json(newProduct);
})
app.get('/api/products/:productID',(req,res)=>{
    const {productID}=req.params
    const singleProduct=products.find((product)=>product.id===Number(productID))
    res.json(singleProduct);
})
app.get('/api/v1/query',(req,res)=>{
    const{search,limit}=req.query
    let sortedProducts=[...products]
    if(search)
        {
            sortedProducts=sortedProducts.filter((product)=>{
                return product.name.startsWith(search)
            })
        }
    if(limit)
        {
            sortedProducts=sortedProducts.slice(0,Number(limit))
        }
        res.status(200).json(sortedProducts)
})
app.listen(5000,()=>{
    console.log('Server is listening')
})