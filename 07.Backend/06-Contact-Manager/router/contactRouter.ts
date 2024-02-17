import {Router, Request, Response} from "express";
import * as contactController from "../controller/contactController";
import { body, validationResult } from "express-validator";


const contactRouter : Router = Router();


/**
 *  Usage =>  To Get All Contacts  
 *  Methods => GET
 *  URL => http://localhost:9000/contacts/
 */

contactRouter.get( "/", async (request : Request, response : Response) => {
    await contactController.getAllContacts(request, response);
});


/**
 *  Usage =>  To Get a Contacts  
 *  Methods => GET
 *  URL => http://localhost:9000/contacts/:contactId
 */

contactRouter.get( "/:contactId", async (request : Request, response : Response) => {
    await contactController.getContact(request, response);
});


/**
 *  Usage =>  To Create a Contact
 *  Methods => POST
 *  URL => http://localhost:9000/contacts/
 */

contactRouter.post( "/",[
    body('name').not().isEmpty().withMessage("Name is Required"),
    body('imageUrl').not().isEmpty().withMessage("imageUrl is Required"),
    body('email').not().isEmpty().withMessage("email is Required"),
    body('mobile').not().isEmpty().withMessage("mobile is Required"),
    body('company').not().isEmpty().withMessage("company is Required"),
    body('title').not().isEmpty().withMessage("title is Required"),
    body('groupId').not().isEmpty().withMessage("groupId is Required"),
] ,async (request : Request, response : Response) => {
    await contactController.createContact(request, response);
});


/**
 *  Usage =>  To Update a Contact
 *  Methods => PUT
 *  URL => http://localhost:9000/contacts/:contactId
 */

contactRouter.put( "/:contactId",[
    body('name').not().isEmpty().withMessage("Name is Required"),
    body('imageUrl').not().isEmpty().withMessage("imageUrl is Required"),
    body('email').not().isEmpty().withMessage("email is Required"),
    body('mobile').not().isEmpty().withMessage("mobile is Required"),
    body('company').not().isEmpty().withMessage("company is Required"),
    body('title').not().isEmpty().withMessage("title is Required"),
    body('groupId').not().isEmpty().withMessage("groupId is Required"),
] ,async (request : Request, response : Response) => {
    await contactController.updateContact(request, response);
});


/**
 *  Usage =>  To Delete a Contact
 *  Methods => DELETE
 *  URL => http://localhost:9000/contacts/:contactId
 */

contactRouter.delete( "/:contactId", async (request : Request, response : Response) => {
    await contactController.deleteContact(request, response);
});

export default contactRouter; 