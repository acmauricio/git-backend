const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get('/hello', (req, res)=>{
    res.json({
        message: 'Hola desde Node.js'
    })
})

message = `SERVICE RUNNING`

app.get('/status', (req, res)=>{
    res.json({
        status: message
    })
})

app.listen(PORT, () => {
    console.log('Server is running on port ', PORT)
})