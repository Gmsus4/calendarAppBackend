const express = require('express');
require('dotenv').config();

//Crear el servidor de express
const app = express();

// Directorio Publico
//Un middleware no es una funcion que se ejecuta en el momento en el que alguien hace una peticion a mi servidor
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
//TODO: CRUD: Eventos

//Escuchar peticiones
app.listen(process.env.PORT, ()=> {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});


