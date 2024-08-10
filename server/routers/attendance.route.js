const express = require('express');
const router = express.Router();
const Attendance = require('../controllers/attendance.controller')

router.post("/asistencia", Attendance.saveAttendance);
router.get("/asistencia", Attendance.getAttendance);
module.exports = router;