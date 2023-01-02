const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require ('dotenv/config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/UserRoutes'));

app.listen(5000, () => console.log('Server started on port 5000'));
mongoose.connect(
    process.env.DB_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err.message));

