const express = require('express');

const path = require('path'); 

const app = express();

const PORT=process.env.PORT || 3010;


app.use(express.static('public'))
app.use(express.static('views'))

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto' + PORT)
});

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
});
app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/register.html'));
});
app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'));
});

