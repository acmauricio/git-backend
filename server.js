const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get('/saludo', (req, res)=>{
    res.json({
        message: 'Hola desde Node.js'
    })
})


message = `EL SERVICIO ESTA CORRIENDO EN EL PUERTO ${PORT}`

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

app.listen(PORT, () => {
    console.log('Server is running on port ', PORT)
})