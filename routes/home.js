//handle initial GET request for homepate
//handle post method request for adding new task
//(3) look for routes in inspect
const express =require('express')
const router =express.Router()
 const homeController =require ('../controllers/home')
router.get('/', homeController.getIndex)
router.post('/', homeController.createTask)
 module.exports= router