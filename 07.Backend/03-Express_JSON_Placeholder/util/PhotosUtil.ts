import path, { resolve } from "path";
import jsonfile from "jsonfile";
import { IPhotos } from "../models/IPhotos";

export class PhotosUtil {

    private static photosJsonPath = path.join(__dirname, "..", "db", "photos.json");
    
    public static getAllPhotosFromDB() : Promise<IPhotos[]>{
        return new Promise( (resolve, reject) => {
            jsonfile.readFile(this.photosJsonPath, (err, data) => {
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        })
    }

    public static getPhotoFromDB(photoId : number) : Promise<IPhotos | undefined>{
        return new Promise( (resolve, reject) => {
            jsonfile.readFile(this.photosJsonPath, (err, data) => {
                if(err){
                    reject(err);
                }else{
                    const photoList : IPhotos[] = data;
                    const photo : IPhotos | undefined = photoList.find(item => item.id === photoId);
                    resolve(photo);
                }
            })
        })
    }
}