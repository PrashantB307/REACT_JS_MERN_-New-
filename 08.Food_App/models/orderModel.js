const mongoose = require("mongoose");

// Schema
const ordersSchema = new mongoose.Schema(
  {
    foods: [{ type: mongoose.Schema.Types.ObjectId, ref: "Foods" }],
    payment: {},
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["Preparing", "Prepared", "On the Way", "Delivered"],
      default: "Preparing",
    },
  },
  { timestamps: true }
);

//  Export
module.exports = mongoose.model("Orders", ordersSchema);
