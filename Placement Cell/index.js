import express from 'express';
import session from 'express-session';
import mongoose from "mongoose";
import bodyParser from "bodyparser";
const app = express();
mongoose.connect('url', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
const User = require('./models/User'); 
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const interviewRoutes = require('./routes/interviewRoutes');
const resultRoutes= require('./routes/resultRoutes');
app.use('/auth', authRoutes);
app.use('/students', studentRoutes);
app.use('/interviews', interviewRoutes);
app.use('/results', resultRoutes);
const externalJobsRoutes = require('./routes/externalJobsRoutes');
app.use('/external-jobs', externalJobsRoutes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

export default app;
