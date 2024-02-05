import express, {Router, Request, Response} from "express";

const customerRouter : Router = Router();

customerRouter.get( "/", (request : Request, response : Response) => {
    response.status(200).json( {
        msg : "From Customer Router",
        path : request.baseUrl,
        method : request.method
    });
});

export default customerRouter;