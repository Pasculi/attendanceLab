const mongoose = require('mongoose');

const DocenteSchema = new mongoose.Schema(
  {
    nombreDocente: {
      type: String,
      required: [true, 'El nombre es requerido'],
    },
    apellidoDocente: {
      type: String,
      required: [true, 'El apellido es requerido'],
    },
    correoDocente: {
      type: String,
      required: [true, 'El correo es requerido'],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
const Docente = mongoose.model('Docente', DocenteSchema);
module.exports = Docente;