const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get('/hello', (req, res)=>{
    res.json({
        message: 'Hola Mundo'
    })
})

message = `SERVICE IS RUNNING ON PORT ${PORT}`

app.get('/status', (req, res)=>{
    res.json({
        message: message
    })
})

app.listen(PORT, () => {
    console.log('Server is running on port ', PORT)
})