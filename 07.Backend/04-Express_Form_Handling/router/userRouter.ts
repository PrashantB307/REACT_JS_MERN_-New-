import { Router, Request, Response } from "express";
import {body, validationResult} from 'express-validator';
import bcrypt from "bcryptjs";
import gravatar from "gravatar";

const userRouter : Router = Router();

/**
 *  Register a User  ====>
 *  username, email, password 
 */

userRouter.post("/register", [
    body('username').not().isEmpty().withMessage("Username is Required"),
    body('password').isStrongPassword({minLength : 6}).withMessage("Strong Password is Required"),
    body('email').isEmail().withMessage("Proper Email is Required"),
], async(request : Request, response : Response) => {

    const errors = validationResult(request);  
    if(!errors.isEmpty()){
        return response.status(400).json( {errors : errors.array()});
    }

    try {
        const {username, email, password} = request.body;

        //  Encrypt the Password ==>
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //  Gravatar

        const gravatarImg = gravatar.profile_url(email, {
            size : '200',
            default : 'mm',
            rating : 'd'
        })


        //  Decript the Password ==>
        // const isMatch = await bcrypt.compare("Password@123", hashPassword);
        // if(isMatch) {
        //     return response.status(200).json( {msg : "Password is Valid"});
        // } else{
        //     return response.status(400).json( {msg : "Invalid Password"});
        // }

        return response.status(200).json( {
            msg : "Register a User",
            formData : {
                username : username,
                email : email,
                password : password,
                hashPassword : hashPassword,
                gravatar : gravatar
            }
        });
    } catch (e : any) {
        response.status(500).json( {
            error : e.message
        });
    }

});


export default userRouter;