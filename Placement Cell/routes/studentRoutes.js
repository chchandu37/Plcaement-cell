// routes/index.js
import express from 'express';
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.getStudents);
router.post('/add', studentController.addStudent);

module.exports = router;
