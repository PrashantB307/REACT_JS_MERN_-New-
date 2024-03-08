const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const { createFoodController, getAllFoodController, getSingleFoodController, getFoodByRestController, updateFoodController, deleteFoodController, placeOrdercontroller, orderStatusController } = require("../controllers/foodController");


const router = express.Router();


// Routes  ====>
//==============

//   CREATE FOOD  ||  POST  ==> http://localhost:8080/api/v1/food/create   
router.post('/create', authMiddleware, createFoodController);

//   GET All FOODS  ||  GET  ==> http://localhost:8080/api/v1/food/getAll
router.get('/getAll', getAllFoodController );

//   GET  FOOD  ||  GET  ==> http://localhost:8080/api/v1/food/get/(Food ID)
router.get('/get/:id', getSingleFoodController );

//   GET FOOD By RESTURANT ID  ||  GET  ==> http://localhost:8080/api/v1/food/getRest/(REST-ID)
router.get('/getRest/:id', getFoodByRestController );

//   UPDATE FOOD  ||  PUT  ==> http://localhost:8080/api/v1/food/update/(ID-Name)
router.put('/update/:id', authMiddleware , updateFoodController);

//   DELETE CATEGORY  || DELETE  ==> http://localhost:8080/api/v1/food/delete/(ID-Name)
router.delete('/delete/:id', authMiddleware, deleteFoodController );

//   PLACE ORDER   || POST  ==> http://localhost:8080/api/v1/food/placeorder
router.post('/placeorder', authMiddleware, placeOrdercontroller );

//   ORDER STATUS   || POST  ==> http://localhost:8080/api/v1/food/orderstatus/(ID-Name)
router.post('/orderstatus/:id', authMiddleware, adminMiddleware, orderStatusController);

module.exports = router;
 