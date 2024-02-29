const resturantModel = require("../models/resturantModel");

//   CREATE RESTURANT  ====>
const createResturantcontroller = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;

    //  Validation ==>
    if (!title || !coords) {
      return res.status(500).send({
        success: false,
        message: "Please Provide Title and Address",
      });
    }

    const newResturant = new resturantModel({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });

    await newResturant.save();
    res.status(201).send({
      success: true,
      message: "New Resturant Created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create Resturant API",
      error,
    });
  }
};

//   GET all Resturant  ===>
const getAllResturantController = async (req, res) => {
  try {
    const resturants = await resturantModel.find({});
    if (!resturants) {
      return res.status(404).send({
        success: false,
        message: "No Resturants Found",
      });
    }

    res.status(200).send({
      success: true,
      totalCount: resturants.length,
      resturants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in GetAll Resturant API",
      error,
    });
  }
};

//  GET RESTURANT  ====>
const getResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Resturant ID",
      });
    }

    //  Find Resturant ===>
    const resturant = await resturantModel.findById(resturantId);
    if (!resturant) {
      return res.status(404).send({
        success: false,
        message: "No Resturant Found",
      });
    }

    res.status(200).send({
      success: true,
      resturant,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Get Resturant API",
      error,
    });
  }
};

//   DELETE RESTURANT ====>
const deleteResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "No ResturantId Found",
      });
    }

    await resturantModel.findByIdAndDelete(resturantId);
    res.status(200).send({
      success: true,
      message: "Resturant Successfully Deleted",
    });
    
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Delete Resturant API",
      error,
    });
  }
};

module.exports = {
  createResturantcontroller,
  getAllResturantController,
  getResturantController,
  deleteResturantController,
};
