const express = require('express');
const path = require('path');
const app = express();

app.get('/',(req,res) => {
    res.sendFile('index.html',{
        root: __dirname
    })
})

app.get('/clientes', (req, res) => {
    res.sendFile('clientes.html', {
         root: __dirname });
});

app.get('/productos',(req,res) => {
    res.sendFile('productos.html',{
        root: __dirname
    })
});
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('font-awesome'));
app.use(express.static('img'));

app.use((req, res) => {
    res.status(404).send('No se encontro tu pagina.......!!!')
    // res.end('No se encontro tu pagina ..........!!!')
})

const port = process.env.PORT || 5000
app.listen(port,() => {
    console.log('funciona')
})