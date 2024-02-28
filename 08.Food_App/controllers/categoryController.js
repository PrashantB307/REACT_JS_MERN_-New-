const categoryModel = require("../models/categoryModel");

//   Create Category ===>
const createCatController = async (req, res) => {
    try {
        const {title, imageUrl} = req.body;

        //  Validation ===>
        if(!title || !imageUrl){
            return res.status(500).send({
                success : false,
                message : "Please Provide Category Title and ImageUrl",
            });
        }

        const newCategory = new categoryModel({ title, imageUrl});
        await newCategory.save();
        res.status(200).send({
            success : true,
            message : "Category Created",
            newCategory
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Create Category API",
            error,
        });
    }
};


//  Get All Category ====>
const getAllCatController = async (req, res) => {
    try {
        const categories = await categoryModel.find({});
        if(!categories){
            return res.status(404).send({
                success : false,
                message : "No Category Found",
            });
        }

        res.status(200).send({
            success : true,
            totalCat : categories.length,
            categories,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Get all Category API",
            error,
        });
    }
};


//  Update Category ===>
const updateCatController = async (req, res) => {
    try {
        const {id} = req.params
        const {title, imageUrl} = req.body;
        const updateCategory = await categoryModel.findByIdAndUpdate(id, {title, imageUrl}, {new : true});
        if(!updateCategory){
            return res.status(500).send({
                success : false,
                message : "No Category Found",
            });
        }

        res.status(200).send({
            success : true,
            message : "Category Updated Successfully",
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Update Category API",
            error,
        });
    }
}


//  Delete Category ====>
const deleteCatCategory = async (req, res) => {
    try {
        const {id} = req.params;
        if(!id) {
            return res.status(500).send({
                success : false,
                message : "Please Provide Category ID",
            });
        }

        const category = await categoryModel.findById(id);
        if(!category){
            return res.status(500).send({
                success : false,
                message : "No Category is found with This ID",
            });
        }

        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success : true,
            message : "Category Deleted Successfully",
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Delete Category API",
            error,
        });
    }
}

module.exports = {createCatController, getAllCatController, updateCatController, deleteCatCategory};