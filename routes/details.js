const express = require('express');
const router = express.Router();


const projectDetails = require('../controllers/project_details');

router.get('/details',projectDetails.details);
// router.post('/create',projectDetails.create);
module.exports = router;