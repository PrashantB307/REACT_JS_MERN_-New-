const mongoose = require("mongoose");

// Function mongodb database connection

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connect to Database ${mongoose.connection.host} `);
    } catch (error) {
        console.log("DB error", error);
    }
};

module.exports = connectDb;
