import express, {Router, Request, Response} from 'express';
import * as USerController from "../controller/userController";

const usersRouter : Router = Router();

/**
 * usage : Get All Users
 * url : http://127.0.0.1:9000/users
 * method : GET
 */

usersRouter.get( "/", async(request: Request, response: Response) => {
   await USerController.getAllUsers(request, response);
})


/**
 * usage : Get Single User
 * url : http://127.0.0.1:9000/users/:userId
 * method : GET
 */

usersRouter.get( "/:userId", async(request: Request, response: Response) => {
    await USerController.getUser(request, response);
})

export default usersRouter;