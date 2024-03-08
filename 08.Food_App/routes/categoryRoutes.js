const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createCatController,
  getAllCatController,
  updateCatController,
  deleteCatCategory,
} = require("../controllers/categoryController");

const router = express.Router();


// Routes  ====>
//==============

//   CREATE CATEGORY  ||  POST  ==> http://localhost:8080/api/v1/category/create
router.post("/create", authMiddleware, createCatController);

//   GET All CATEGORY  ||  GET  ==> http://localhost:8080/api/v1/category/getAll
router.get("/getAll", getAllCatController);

//   UPDATE CATEGORY  ||  GET  ==> http://localhost:8080/api/v1/category/update/(ID-Name)
router.put("/update/:id", authMiddleware, updateCatController);

//   DELETE CATEGORY  || DELETE  ==> http://localhost:8080/api/v1/category/delete/(ID-Name)
router.get("/delete/:id", authMiddleware, deleteCatCategory);

module.exports = router;
