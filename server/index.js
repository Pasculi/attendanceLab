const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config()
require('./config/mongoose.config')
const attendanceRouter = require('./routers/attendance.route');
const docenteRouter = require("./routers/docente.route");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5001;
const HOST = process.env.HOST;


app.get('/api/v1', (req, res) => {
  res.send('Hello World');
})

app.use("/api/v1", attendanceRouter, docenteRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${HOST}:${PORT}`)
});