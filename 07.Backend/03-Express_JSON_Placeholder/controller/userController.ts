import express, {Router, Request, Response} from 'express';
import { IUser } from '../models/IUser';
import { UserUtil } from '../util/UserUtil';


/**
 * usage : Get All Users
 * url : http://127.0.0.1:9000/users
 * method : GET
 */

export const getAllUsers = async (request : Request, response : Response) => {
    try {
        let userData : IUser[] = await UserUtil.getAllUsersFromDB();
        return response.status(200).json(userData);
    }catch(error){
        return response.status(500).json( {msg : "Server Error"});
    }
}


/**
 * usage : Get Single User
 * url : http://127.0.0.1:9000/users/:userId
 * method : GET
 */

export const getUser = async (request : Request, response : Response) => {
    try {
        let {userId} = request.params;
        let userData : IUser | undefined = await UserUtil.getUserFromDB(Number(userId));
        if(userData){
            return response.status(200).json(userData);
        }
    }catch(error){
        return response.status(500).json( {msg : "Server Error"});
    }
}