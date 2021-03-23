const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const projects = require('./routers/projects')
const tools = require('./routers/tools');
const user = require('./routers/user');
require('dotenv').config();

const app = express()

//connect to mongodb
const dbURI = process.env.MONGO_DB_URI;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(5000))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(cors())
app.use('/projects',projects);
app.use('/tools',tools);
app.use('/user',user);
