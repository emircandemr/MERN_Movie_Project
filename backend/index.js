const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// require ('dotenv/config');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: __dirname+'/.env'});
  }
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
    process.env.DB_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err.message));

// app.use('/api/users', require('./routes/UserRoutes'));
app.use('/api/users', require(path.join(__dirname, 'routes', 'UserRoutes.js')));

app.listen(5000, () => console.log('Server started on port 5000'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client', 'dist')));
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client', 'dist', 'index.html'));
    })
  }