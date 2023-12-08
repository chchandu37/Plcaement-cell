import express from 'express';
const router = express.Router();
const interviewController = require('../controllers/interviewController');

router.get('/', interviewController.getInterviews);
router.post('/add', interviewController.addInterview);

module.exports = router;
