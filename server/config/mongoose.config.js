const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://jsepulveda:beimone1@cluster0.rqsd9w0.mongodb.net/"
)
  .then(() => console.log('Connected DB Attendance'))
.catch(err => console.log(err));