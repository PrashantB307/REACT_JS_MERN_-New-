import {Request, Response} from "express"
import { APP_STATUS } from "../constants/constants";
import { validationResult } from "express-validator";
import ContactTable from "../database/ContactSchema";
import { IContact } from "../model/IContact";
import mongoose from "mongoose";


/**
 *  Usage =>  To Get All Contacts  
 *  Methods => GET
 *  params => no-params
 *  URL => http://localhost:9000/contacts/
 */

export const getAllContacts = async(request : Request, response : Response) => {
    try {
        let contacts : IContact[] | undefined = await ContactTable.find();
        if(contacts){
            return response.status(200).json( {
                status : APP_STATUS.SUCCESS,
                data : contacts,
                msg : ""
            });
        }

    }catch(error : any) {
        return response.status(500).json( {
            status : APP_STATUS.FAILED,
            data : null,
            error : error.message
        });
    }
} 


/**
 *  Usage =>  To Get a Contacts  
 *  Methods => GET
 *  params => no-params
 *  URL => http://localhost:9000/contacts/:contactId
 */

export const getContact = async(request : Request, response : Response) => {
    try {
        let {contactId} = request.params;
        if(contactId){
            const mongoContactId = new mongoose.Types.ObjectId(contactId);
            const contact: IContact | undefined | null = await ContactTable.findById(mongoContactId);
            if(!contact){
                return response.status(404).json( {
                    status : APP_STATUS.FAILED,
                    data : null,
                    error : "No Contact Found"
                });
            }

            return response.status(200).json( {
                staus : APP_STATUS.SUCCESS,
                data : contact,
                msg : ""
            });
        }

    }catch(error : any) {
        return response.status(500).json( {
            status : APP_STATUS.FAILED,
            data : null,
            error : error.message
        });
    }
} 


/**
 *  Usage =>  To Create a Contact
 *  Methods => POST
 *  params => name, imageUrl, email, mobile, company, title, groupId
 *  URL => http://localhost:9000/contacts/
 */

export const createContact = async(request : Request, response : Response) => {
    const errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(400).json({errors : errors.array()});
    }
    
    try {

        //  read the form data
        let {name , imageUrl, email, mobile, company, title, groupId, updatedAt} = request.body;

        //  check if the mobile exists
        let contact = await ContactTable.findOne({mobile : mobile});
        if(contact){
            return response.status(400).json( {
                status : APP_STATUS.FAILED,
                data : null,
                error : "Moble number is already exists"
            });
        }

        //  create
        let theContactObj: IContact = {
            name: name,
            imageUrl: imageUrl,
            email: email,
            mobile: mobile,
            company: company,
            title: title,
            groupId: groupId,
            updatedAt : updatedAt
        }  

        theContactObj = await new ContactTable(theContactObj).save();
        if(theContactObj) {
            return response.status(200).json( {
                status : APP_STATUS.SUCCESS,
                data : theContactObj,
                msg : "Contact is Created"
            }); 
        }

        //  send

    }catch(error : any) {
        return response.status(500).json( {
            status : APP_STATUS.FAILED,
            data : null,
            error : error.message
        });
    }
} 


/**
 *  Usage =>  To Update a Contact
 *  Methods => PUT
 *  params => name, imageUrl, email, mobile, company, title, groupId
 *  URL => http://localhost:9000/contacts/:contactId
 */

export const updateContact = async(request : Request, response : Response) => {
    const {contactId} = request.params;
    const errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(400).json({errors : errors.array()});
    }
    
    try {
        //  read the form data
        let {name , imageUrl, email, mobile, company, title, groupId, updatedAt} = request.body;

        //  check if the contact exists
        const mongoContactid = new mongoose.Types.ObjectId(contactId);
        let contact : IContact | null | undefined = await ContactTable.findById(mongoContactid);
        if(!contact){
            return response.status(404).json( {
                status : APP_STATUS.FAILED,
                data : null,
                error : "Contact is not Found"
            });
        }

        //  Update
        let theContactObj: IContact | null = {
            name: name,
            imageUrl: imageUrl,
            email: email,
            mobile: mobile,
            company: company,
            title: title,
            groupId: groupId,
            updatedAt : updatedAt
        }  

        theContactObj = await ContactTable.findByIdAndUpdate(mongoContactid, {
            $set : theContactObj
        }, {new : true})
        if(theContactObj) {
            return response.status(200).json( {
                status : APP_STATUS.SUCCESS,
                data : theContactObj,
                msg : "Contact is Updated"
            }); 
        }

    }catch(error : any) {
        return response.status(500).json( {
            status : APP_STATUS.FAILED,
            data : null,
            error : error.message
        });
    }
} 


/**
 *  Usage =>  To Delete a Contact
 *  Methods => DELETE
 *  params => no-params
 *  URL => http://localhost:9000/contacts/:contactId
 */

export const deleteContact = async(request : Request, response : Response) => {
    try {
        let {contactId} = request.params;
        if(contactId){
            const mongoContactId = new mongoose.Types.ObjectId(contactId);
            const contact: IContact | undefined | null = await ContactTable.findById(mongoContactId);
            if(!contact){
                return response.status(404).json( {
                    status : APP_STATUS.FAILED,
                    data : null,
                    error : "No Contact Found"
                });
            }

            let theContact : IContact | null  = await ContactTable.findByIdAndDelete(mongoContactId);

           if(theContact) {
            return response.status(200).json( {
                staus : APP_STATUS.SUCCESS,
                data : theContact,
                msg : "Contact is Deleted"
            });
           }
        }

    }catch(error : any) {
        return response.status(500).json( {
            status : APP_STATUS.FAILED,
            data : null,
            error : error.message
        });
    }
}