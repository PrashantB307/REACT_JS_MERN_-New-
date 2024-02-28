const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');


//  REGISTER  ====>
const registerController = async (req, res) => {
    try {
        const {username, email, password, address, phone, answer} = req.body;
        if(!username || !email || !password || !address || !phone || !answer){
            return res.status(500).send( {
                success : false,
                message : "Please Provide all Fields"
            })
        }

        //  Chech User ===>
        const existing = await userModel.findOne({ email });
        if(existing){
            return res.status(500).send({
                success : false,
                message : "Email Already Registerd please Login"
            });
        }

        // Hashinmg Password ==>
        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //  Create new User ===>
        const user = await userModel.create({
            username,
            email, 
            password : hashedPassword, 
            phone, 
            address, 
            answer
        });
        res.status(201).send({
            success : true,
            message : "Successfully Registered",
            user,
        });
    
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Register API",
            error
        })
    }
};

//  LOGIN ===>
const loginController = async (req, res) => {
    try {
        const {email, password} = req.body

        // Validation ==>
        if(!email || !password){
            return res.status(500).send({
                success : false,
                message : "Please Provide Email & Password",
            })
        }
        
        //  Check User ==>
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success : false,
                message : "User Not Found"
            })
        }

        //  Check User Password || Compare Password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(404).send({
                success : false,
                message : "invalid Credentials",
            });
        }
        
        //  Token ===>
        const token = JWT.sign({id : user._id} , process.env.JWT_SECRET, {
            expiresIn : '7d',
        });

        user.password = undefined;  // Hide the Password section 

        res.status(200).send({
            success : true,
            message : "login Successfully",
            token,
            user,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Login API",
            error
        })
    }
};

module.exports = {registerController, loginController};