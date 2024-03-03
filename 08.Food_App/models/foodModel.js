const mongoose = require("mongoose");

// Schema
const foodSchema = new mongoose.Schema(
  {
    title : {
        type : String,
        required : [true, "Food Title is Required"]
    },
    description : {
        type : String,
        required : [true, "Food Description is Required"]
    },
    price : {
        type : Number,
        required : [true, "Food Price is Required"]
    },
    imageUrl : {
        type : String,
        default :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIlOCGOHbBCxZXDhKQHpU2R9kBTewXI9siSg&usqp=CAU"
    },
    foodTags : {
        type : String
    },
    category : {
        type : String
    },
    code : {
        type : String
    },
    isAvailable : {
        type : Boolean,
        default : true
    },
    resturant : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Resturant'
    },
    rating : {
        type : Number,
        default : 5,
        min : 1,
        max : 5
    },
    ratingCount : {
        type : String,
    },
  },
  { timestamps: true }
);

//  Export
module.exports = mongoose.model("Foods", foodSchema);
