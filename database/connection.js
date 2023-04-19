const mongoose = require("mongoose");

const connection = async() => {
    try {

        await mongoose.connect("mongodb://localhost:27017/mi_blog");

            // Parametros dentro de objeto // solo en caso de aviso
            // useNewUrlParser: true
            // useUnifiedTopology: true
            // useCreateIndex: true

            console.log("Conexión de manera Exitosa!!!");

    } catch (error) {
        console.log(error);
        throw new Error ("No se realizo la conexión a la BD");
    }    
}

module.exports = {
    connection
}