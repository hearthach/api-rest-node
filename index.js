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
const app = express();
const port = 3900

//Configurar cors
//usamos middwlware del cors
app.use(cors());

//converstir Body a Objetos JS
//usamos middwlware del cors
app.use(express.json());

//Rutaas
const routes_article = require("./routes/articleRoutes");
//cargando las rutas
app.use("/api", routes_article);

//Rutas de prueba harcodeads
app.get("/probando", (req, res) => {
    console.log("se ha ejecutado el endpoint probando");

    return res.status(200).json([
        {
            curso: "Master en Reac",
            autor: "Pedro Landauro WEB",
            url: "pedrolandaurowe.es/master-react"
        },
        {
            curso: "Master en Reac",
            autor: "Pedro Landauro WEB",
            url: "pedrolandaurowe.es/master-react"
        }
    ]);
});

app.get("/", (req, res) => {
    return res.status(200).send(
        "<h1>Empezando a crear un api rest con NodeJS</h1>"
    );
});

//crear servidor y escuchar peticiones http
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}!`);
})
