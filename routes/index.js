const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
//this will fetchout the data of home controller
router.get('/',homeController.home);

router.post('/create',homeController.create);
router.use('/project',require('./details'));



module.exports = router;