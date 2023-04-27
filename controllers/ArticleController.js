// 2 FORMA: programacion Funcional

const validator = require("validator");

const test = (req, res) => {
    return res.status(200).json({
        mensaje: "Soy una acción de prueba en mi controlador Articles"
    });
}

const curso = (req, res) => {
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
}

const create = (req, res) => {

    //para guardar primero
    //Recoger parametros por post a guardar
    let parametros = req.body;

    //Validar datos -usaremos libreria npmjs validador
    // https://www.npmjs.com/package/validator
    try {
        let validar_titulo = !validator.isEmpty(parametros.titulo) &&
                                validator.isLength(parametros.titulo, {min: 5, max: 25}); //a max puedes colocarle undefined
        let validar_contenido = !validator.isEmpty(parametros.contenido);

        if (!validar_titulo || !validar_contenido) {
            throw new Error("No se ha validado la informacion!!!");
            
        }

    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "Faltan datos por enviar"
        })
    }

    //Crwar el objeto a guardar

    //Asignar valores a objetos basados en el modelo(manual o automatico)
    
    //Guardar el article en la base de datos

    //devolver resultados

    return res.status(200).json({
        mensaje: "Accion de guardar",
        parametros
    })
}

module.exports = {
    test,
    curso,
    create
}

// 1 FORMA: creando constantes, como clase
/*
const controller = {
    propiedad: () =>{

    }
}
*/