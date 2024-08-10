const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema(
  {
    nombreCurso: {
      type: String,
      required: true,
    },
    letraCurso: {
      type: String,
      enum: ["A", "B"],
    },
    matricula: {
      type: Number,
      required: true,
    },
    asistencia: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Curso = mongoose.model("Curso", CursoSchema);

module.exports = Curso;