const mongoose = require('mongoose');
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.error(err));

module.exports = mongoose;
