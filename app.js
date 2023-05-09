const express = require('express');

const path = require('path'); 

const app = express();

app.use(express.static('public'))
app.use(express.static('views'))

app.listen(3010, () => {
    console.log('Servidor corriendo en el puerto 3010')
});

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
});

