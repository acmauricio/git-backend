const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.json({
        message: 'Welcome to my api'
    })
})

message = `STATUS CHECK SUCCESFULY ${PORT}`

app.get('/status', (req, res)=>{
    res.json({
        status: message
    })
})


app.get('/usuarios', (req, res)=>{
    res.json({
        message: "Lista de usuarios"
    })
})


app.get('/products', (req, res)=>{
    res.json({
        message: "PRODUCT LIST", products: ['Product1', 'Product2']
    })
})

app.listen(PORT, () => {
    console.log('Server is running on port ', PORT)
})