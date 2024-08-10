const express = require("express");
const router = express.Router();
const Docentes = require('../controllers/docente.controller')

router.get("/docente", Docentes.getDocente);
router.post("/docente", Docentes.saveDocente);

module.exports = router;