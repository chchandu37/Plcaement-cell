import  express  from 'express';
const router = express.Router();
const csvController = require('../controllers/csvController');

router.get('/download', csvController.downloadCSV);

module.exports = router;
