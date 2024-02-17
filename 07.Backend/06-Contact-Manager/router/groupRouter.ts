import {Router, Request, Response} from "express";
import * as groupController from "../controller/groupController"
import { body } from "express-validator";


const groupRouter : Router = Router();

/**
 *  Usage =>  To Get All Groups  
 *  Methods => GET
 *  params => no-params
 *  URL => http://localhost:9000/groups
 */

groupRouter.get( "/", async (request : Request, response : Response) => {
    await groupController.getAllGroups(request, response);
});


/**
 *  Usage =>  To Create a Group 
 *  Methods => POST
 *  params => name
 *  URL => http://localhost:9000/groups
 */

groupRouter.post( "/", [
    body('name').not().isEmpty().withMessage("Name is Required")
] ,async (request : Request, response : Response) => {
    await groupController.createGroup(request, response);
});



/**
 *  Usage =>  To Get a Group 
 *  Methods => GET
 *  params => no-params
 *  URL => http://localhost:9000/groups/:groupId
 */

groupRouter.get( "/:contactId", async (request : Request, response : Response) => {
    await groupController.getGroup(request, response);
});


export default groupRouter; 