import express, {Router, Request, Response} from 'express';
import { IPhotos } from '../models/IPhotos';
import { PhotosUtil } from '../util/PhotosUtil';


/**
 * usage : Get All Photos
 * url : http://127.0.0.1:9000/photos
 * method : GET
 */

export const getAllPhotos = async (request : Request, response : Response) => {
    try {
        let photosData : IPhotos[] = await PhotosUtil.getAllPhotosFromDB();
        return response.status(200).json(photosData);
    }catch(error){
        return response.status(500).json( {msg : "Server Error"});
    }
}


/**
 * usage : Get Single Photo
 * url : http://127.0.0.1:9000/photos/:photoId
 * method : GET
 */

export const getphoto = async (request : Request, response : Response) => {
    try {
        let {photoId} = request.params;
        let photoData : IPhotos | undefined = await PhotosUtil.getPhotoFromDB(Number(photoId));
        if(photoData){
            return response.status(200).json(photoData);
        }
    }catch(error){
        return response.status(500).json( {msg : "Server Error"});
    }
}