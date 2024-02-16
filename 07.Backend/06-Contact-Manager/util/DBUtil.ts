import mongoose from "mongoose";

export class DBUtil {

    public static connectToDB(dbUrl : string, dbName : string) : Promise<string> {
        return new Promise( (resolve, reject) => {
            mongoose.connect(dbUrl, {
                dbName : dbName,
            })
        })
    }
}