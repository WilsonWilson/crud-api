const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// route files
const clientsRouter = require('./routes/clients');

// mount routes
app.use('/api/v1/clients', clientsRouter);

// Connect to DB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
