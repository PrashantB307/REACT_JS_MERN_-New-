import path, { resolve } from "path";
import jsonfile from "jsonfile";
import { IUser } from "../models/IUser";

export class UserUtil {

    private static userJsonPath = path.join(__dirname, "..", "db", "users.json");
    
    public static getAllUsersFromDB() : Promise<IUser[]>{
        return new Promise( (resolve, reject) => {
            jsonfile.readFile(this.userJsonPath, (err, data) => {
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        })
    }

    public static getUserFromDB(userId : number) : Promise<IUser | undefined>{
        return new Promise( (resolve, reject) => {
            jsonfile.readFile(this.userJsonPath, (err, data) => {
                if(err){
                    reject(err);
                }else{
                    const userList : IUser[] = data;
                    const user : IUser | undefined = userList.find(item => item.id === userId);
                    resolve(user);
                }
            })
        })
    }
}