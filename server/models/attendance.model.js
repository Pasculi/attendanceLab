const mongoose = require("mongoose");


const AttendanceSchema = new mongoose.Schema(
  {
    nameCourse: {
      type: String,
      required: [true, "Ingrese un curso"],
    },
    nameDocente: {
      type: String,
      required: [true, "Ingrese un docente"],
    },
    matricula: {
      type: String,
      required: [true, "Ingrese una matricula"],
    },
    attendance: {
      type: Number,
      required: [true, "Ingrese una asistencia"],
    },
    date: {
      type: Date,
      default: Date.now,
      required: [true, "Ingrese una fecha"],
    },
    herramientas: {
      type: String,
      required: [true, "Ingrese una herramienta a utilizar"],
    },
    objetivo: {
      type: String,
      required: [true, "Ingrese un objetivo"],
    },
  },
  { timestamps: true }
);

const Attendance = mongoose.model("Attendance", AttendanceSchema);

module.exports = Attendance;