import express from 'express';
const router = express.Router();
const resultController = require('../controllers/resultController');

router.get('/', resultController.getResults);
router.post('/add', resultController.addResult);

module.exports = router;
