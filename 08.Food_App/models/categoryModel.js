const mongoose = require("mongoose");

// Schema
const categorySchema = new mongoose.Schema(
  {
    title : {
        type : String,
        required : [true, "Category Title is Required"]
    },
    imageUrl : {
        type : String,
        default :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIlOCGOHbBCxZXDhKQHpU2R9kBTewXI9siSg&usqp=CAU"
    },
  },
  { timestamps: true }
);

//  Export
module.exports = mongoose.model("Category", categorySchema);
