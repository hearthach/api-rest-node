const { connection } = require("./database/connection");
const express = require('express');
const cors = require("cors");

//app.get('/', (req, res) => res.send('Hello World!'))
//app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//Iniciar la app
console.log("App en node Iniciada");

//conectar a la base de datos
connection();

//crear servidor de node
const app = express()
const port = 3900

//Configurar cors
//usamos middwlware del cors
app.use(cors());

//converstir Body a Objetos JS
//usamos middwlware del cors
app.use(express.json());

//Crear rutas

//crear servidor y escuchar peticiones http
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}!`);
})
