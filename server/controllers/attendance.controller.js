const Attendance = require("../models/attendance.model");

module.exports.saveAttendance = async (req, res) => {
  const {
    nameCourse,
    nameDocente,
    matricula,
    attendance,
    date,
    herramientas,
    objetivo,
  } = req.body;
  console.log(req.body)
  await Attendance.create({
    nameCourse,
    nameDocente,
    matricula,
    attendance,
    date,
    herramientas,
    objetivo,
  })
    .then((newAttendance) =>
      res.status(200).json({ attendance: newAttendance })
    )
    .catch((err) =>
      res.status(500).json({ message: '"Error saving attendance', err })
    );
};

module.exports.getAttendance = async (req, res) => {
  console.log(Date.now())
  await Attendance.find().then((getAttendance) =>
    res.send({ attendance: getAttendance }))
  .catch(err => res.status(500).send({message:err}))

}
