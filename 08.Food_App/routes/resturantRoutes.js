const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const { createResturantcontroller, getAllResturantController, getResturantController, deleteResturantController } = require("../controllers/resturantController");

const router = express.Router();

// Routes  ====>
//==============

//   CREATE RESTURANT  ||  POST  ==> http://localhost:8080/api/v1/resturant/create   
router.post('/create', authMiddleware, createResturantcontroller);

//   GET All RESTURANT  ||  GET  ==> http://localhost:8080/api/v1/resturant/getAll
router.get('/getAll', getAllResturantController, );

//   GET RESTURANT  ||  GET  ==> http://localhost:8080/api/v1/resturant/get/(ID-Name)
router.get('/get/:id', getResturantController);

//   DELETE RESTURANT  || DELETE  ==> http://localhost:8080/api/v1/resturant/delete/(ID-Name)
router.get('/delete/:id', authMiddleware, deleteResturantController);



module.exports = router;
