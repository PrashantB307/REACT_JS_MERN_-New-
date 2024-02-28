const foodModel = require("../models/foodModel");
const orderModel = require("../models/orderModel");

//   Create Food ====>
const createFoodController = async (req, res) => {
  try {
    const { title, description, price, isAvailable, resturant, rating } =
      req.body;

    if (!title || !description || !price || !resturant) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    const newFood = new foodModel({
      title,
      description,
      price,
      isAvailable,
      resturant,
      rating,
    });

    await newFood.save();
    res.status(200).send({
      success: true,
      message: "New Food Item Created",
      newFood,
    });
  } catch (error) {
    console.log();
    res.status(500).send({
      success: false,
      message: "Error in Create Food API",
      error,
    });
  }
};

//  Get All Foods =====>
const getAllFoodController = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    if (!foods) {
      return res.status(500).send({
        success: false,
        message: "No food Item Found",
      });
    }

    res.status(200).send({
      success: true,
      totalFoods: foods.length,
      foods,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Get All Food API",
      error,
    });
  }
};

//   Get Single Food ====>
const getSingleFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      res.status(404).send({
        success: false,
        message: "Please Provide Id",
      });
    }

    const food = await foodModel.findById(foodId);

    if (!food) {
      res.status(404).send({
        success: false,
        message: "No Food found with this Id",
      });
    }

    res.status(200).send({
      success: true,
      food,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Get Food API",
      error,
    });
  }
};

//   Get Food By Resturant ID ====>
const getFoodByRestController = async (req, res) => {
  try {
    const restId = req.params.id;
    if (!restId) {
      res.status(404).send({
        success: false,
        message: "Please Provide Id",
      });
    }

    const food = await foodModel.find({ resturant: restId });

    if (!food) {
      res.status(404).send({
        success: false,
        message: "No Food found with this Id",
      });
    }

    res.status(200).send({
      success: true,
      message: "Food BAsed on Resturant",
      food,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Get Food API",
      error,
    });
  }
};

// Update Food ====>
const updateFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if(!foodId){
      return res.status(404).send({
        success: false,
        message: "No Food Id was found",
      });
    }

    const food = await foodModel.findById(foodId);
    if(!food){
      return res.status(404).send({
        success: false,
        message: "No Food found",
      });
    }

    const {title,
      description,
      price,
      isAvailable,
      resturant,
      rating} = req.body;

    const updatedFood = await foodModel.findByIdAndUpdate(foodId, {
      title,
      description,
      price,
      isAvailable,
      resturant,
      rating,
    }, {new : true})  

    res.status(200).send({
      success : true,
      message : "Food Item was Updated"
    });

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Update Food API",
      error,
    });
  }
};


//   Delete Food Item ===>
const deleteFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if(!foodId){
      return res.status(404).send({
        success: false,
        message: "No Food Id was found",
      });
    }

    const food = await foodModel.findById(foodId);
    if(!food){
      return res.status(404).send({
        success: false,
        message: "No Food was found.",
      });
    }

    await foodModel.findByIdAndDelete(foodId);
    res.status(200).send({
      success: true,
      message: "Food Item was Deleted.",
    });
    
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Delete Food API",
      error,
    });
  }
};


//  Place Orders ===>
const placeOrdercontroller = async (req, res) => {
  try {
    const {cart} = req.body;
    if(!cart){
      return res.status(500).send({
        success: false,
        message: "Please Add Food Cart.",
      });
    }

    let total = 0;
    //  Calculation ===>
    cart.map( (i) => {
      total += i.price;
    });

    const newOrder = new orderModel( {
      foods : cart,
      payment : total, 
      buyer : req.body.id,
    });

    await newOrder.save();

    res.status(201).send( {
      success: true,
      message: "Order Placed SuccessFully",
      newOrder,
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Place Order API",
      error,
    });
  }
};


//  Change Order Status ====>
const orderStatusController = async (req, res) => {
  try {
    const orderId = req.params.id;

    if(!orderId){
      return res.status(404).send({
        success: false,
        message: "Please Provide valid Order Id",
      });
    }

    const {status} = req.body;
    const order = await orderModel.findByIdAndUpdate(orderId, {status}, {new : true});
    res.status(200).send({
      success: true,
      message: "Order Status Updated",
    });

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Order Status API",
      error,
    });
  }
};

module.exports = {
  createFoodController,
  getAllFoodController,
  getSingleFoodController,
  getFoodByRestController,
  updateFoodController,
  deleteFoodController,
  placeOrdercontroller,
  orderStatusController,
};
