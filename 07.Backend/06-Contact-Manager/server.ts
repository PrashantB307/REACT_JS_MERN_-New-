import express, {Application, Request, Response} from 'express';
import dotenv from "dotenv";
import { DBUtil } from './util/DBUtil';
import contactRouter from './router/contactRouter';
import groupRouter from './router/groupRouter';


const app : Application = express();

//  Configure express to resceive the form data
app.use(express.json());
 

//  Configure express to read .env file
dotenv.config( {
    path : "./.env"
});


// const hostname: string | undefined = process.env.EXPRESS_HOST_NAME;
const port: string | number = process.env.PORT || 9000;
const dbUrl: string | undefined = process.env.MONGO_DB_CLOUD_URL;
const dbName: string | undefined = process.env.MONGO_DB_DATABASE;


app.get( "/", (request:Request , response:Response) => {
    response.status(200);
    response.json( {
        msg : "Welocome to Express Server"
    });
});


//  Configure the Routers
app.use( "/contacts", contactRouter);
app.use( "/groups", groupRouter);


if(port){
    app.listen(Number(port), () => {
        if(dbUrl && dbName){
            DBUtil.connectToDB(dbUrl, dbName).then( (dbResponse) => {
                console.log(dbResponse);
            }).catch( (error) => {
                console.error(error);
                process.exit(0);   // Force stop express server
            });
        }
        console.log(`Express Server is Started at ${port}`);
    });
}
