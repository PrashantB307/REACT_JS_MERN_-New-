import express, {Router, Request, Response} from 'express';
import * as Photocontroller from "../controller/photoController"

const photosRouter : Router = Router();

/**
 * usage : Get Single Photo
 * url : http://127.0.0.1:9000/photos
 * method : GET
 */

photosRouter.get( "/", async(request: Request, response: Response) => {
    await Photocontroller.getAllPhotos(request, response);
 })
 
 
/**
 * usage : Get Single Photo
 * url : http://127.0.0.1:9000/photos/:photoId
 * method : GET
 */

 photosRouter.get( "/:photoId", async(request: Request, response: Response) => {
     await Photocontroller.getphoto(request, response);
 })

export default photosRouter;