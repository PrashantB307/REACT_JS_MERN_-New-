const express = require("express");
const {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteUserController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();


// Routes  ====>
//==============

// GET USER || GET ====>
router.get("/getUser", authMiddleware, getUserController);

//  UPDATE PROFILE ====>
router.put("/updateUser", authMiddleware, updateUserController);

//  UPDATE PASSWORD ====>
router.post("/updatePassword", authMiddleware, updatePasswordController);

//  RESET PASSWORD  ====>
router.post("/resetPassword", authMiddleware, resetPasswordController);

//  DELETE USER  ====>
router.delete("/deleteUser/:id", authMiddleware, deleteUserController);

module.exports = router;
