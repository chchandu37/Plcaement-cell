import  express from 'express';
const router = express.Router();
const externalJobsController = require('../controllers/externalJobsController');

router.get('/', externalJobsController.getExternalJobs);

module.exports = router;
