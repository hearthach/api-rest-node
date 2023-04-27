const { Schema, model } = require("mongoose");

const ArticleSchema = Schema ({
    // https://mongoosejs.com/docs/schematypes.html
    //para verificar tipos de varibles
    titulo: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    imagen: {
        type: String,
        default: "default.png"
    }
});

module.exports = model("Article", ArticleSchema, "articles");
                        //mongoose dira articles

