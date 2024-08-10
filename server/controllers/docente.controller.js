const Docente = require("../models/docente.model");


module.exports.getDocente = async (req, res) => { 
  await Docente.find()
    .then((getDocente) => res.send({ docente: getDocente }))
    .catch((err) => res.status(500).send({ message: err }));
}

module.exports.saveDocente = async (req, res) => {
  const { nombreDocente, apellidoDocente, correoDocente } = req.body;
  await Docente.create({ nombreDocente, apellidoDocente, correoDocente })
    .then((saveDocente) => res.send({ message: saveDocente }))
    .catch((err) => res.status(500).send({ message: err }));
}