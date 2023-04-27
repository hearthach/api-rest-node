const express = require('express');
const router = express.Router();

const ArticleController = require("../controllers/ArticleController");

//Rutas de prueba
router.get("/ruta-de-prueba", ArticleController.test);
router.get("/curso", ArticleController.curso);

module.exports = router;
