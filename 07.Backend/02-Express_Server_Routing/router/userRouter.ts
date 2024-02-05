import express, {Router, Request, Response} from "express";

const userRouter : Router = Router();

/**
 * For Static Url  =====>
 * http://127.0.0.1:9000/api/users/
 * methode : GET
 */

userRouter.get( "/", (request : Request, response : Response) => {
    response.status(200).json( {
        msg :"From User Router",
        path : request.baseUrl,
        method : request.method
    });
});


/**
 * For Dynamic Url  =====>
 * http://127.0.0.1:9000/api/users/:userId
 * methode : GET
 */

userRouter.get( "/:userId", (request : Request, response : Response) => {
    const {userId} = request.params;
    response.status(200).json( {
        msg :"From User Router",
        path : request.baseUrl,
        method : request.method,
        userId : userId
    });
});


export default userRouter;