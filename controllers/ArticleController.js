// 2 FORMA: programacion Funcional
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

module.exports = {
    test,
    curso
}

// 1 FORMA: creando constantes, como clase
/*
const controller = {
    propiedad: () =>{

    }
}
*/