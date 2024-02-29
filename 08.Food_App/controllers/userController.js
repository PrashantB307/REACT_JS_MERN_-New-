const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');

// Get User Info ===>
const getUserController = async (req, res) => {
    try {

        //  Find User ===>
        const user = await userModel.findById({_id : req.body.id});

        //   Validation ==>
        if(!user) {
            return res.status(404).send({
                seccess : false,
                message : "User not Found",
            });
        }

        //  Hide a Password ===>
        user.password = undefined;

        //  Response ===>
        res.status(200).send({
            seccess : true,
            message : "User Get Successfully",
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            seccess : false,
            message : "Error in Get User API",
            error
        });
    }
};


//  UPDATE USER ====>
const updateUserController = async (req, res) => {
    try {

        //   Find User ==>
        const user = await userModel.findById({ _id : req.body.id});

        //   Validation ==>
        if(!user) {
            return res.status(404).send({
                seccess : false,
                message : "User not Found",
            });
        }

        //  Update ==>
        const {username, address, phone} = req.body;
        if (username) user.username = username;
        if (address) user.address = address;
        if (phone) user.phone = phone;
        
        //  Save User  ===>
        await user.save();
        res.status(200).send({
            seccess : true,
            message : "User Updated Successfully",
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            seccess : false,
            message : "Error in Update User API",
            error,
        });
    }
};


//   UPDATE USER PASSWORD ====>
const updatePasswordController = async (req, res) => {
    try {

        //   Find User ==>
        const user = await userModel.findById({_id : req.body.id});

        //   Validation ==>
        if(!user) {
            return res.status(404).send({
                seccess : false,
                message : "User not Found",
            });
        }

        //   Get Data From User  ==> 
        const {oldPassword, newPassword} = req.body 
        if(!oldPassword || !newPassword){
            return res.status(500).send({
                success : false,
                message : "Please Provide Old and New Password",
            });
        }

        //  Check User Password || Compare Password
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if(!isMatch){
            return res.status(500).send({
                success : false,
                message : "Invalid Old Password",
            });
        }

        //  Hashing Password ==>
        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedPassword;
        await user.save();
        res.status(200).send({
            success : true,
            message : "Password Updated"
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Password Update API",
            error
        });
    }
};


//   RESET PASSWORD ====>
const resetPasswordController = async (req, res) => {
    try {
        const { email, newPassword, answer } = req.body;
        if (!email || !newPassword || !answer) {
            return res.status(500).send({
                success: false,
                message: "Please Privide All Fields",
            });
        }

        const user = await userModel.findOne({email, answer});
        if(!user){
            return res.status(500).send({
                success : false,
                message : "User not Found Or Invalid Answer",
            });
        }

        //  Hashing Password ==>
        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedPassword;
        await user.save();
        res.status(200).send({
            success : true,
            message : "Password Reset Successfully"
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Password Reset API",
            error
        });
    }
};

//   DELETE USER PROFILE ===>
const deleteUserController = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id)
        return res.status(200).send({
            success : true,
            message : "Your Account has been Deleted",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Delete Profile API",
            error
        });
    }
};

module.exports = {getUserController, 
    updateUserController, 
    updatePasswordController,
    resetPasswordController, 
    deleteUserController, };