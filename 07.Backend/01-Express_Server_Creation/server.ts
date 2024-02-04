import express, {Application, Request, Response} from 'express';
import { request } from 'http';

const hostname:string = "127.0.0.1";
const port:number = 9000;

const app:Application = express();

app.get( "/", (request:Request , response:Response) => {
    response.status(200);
    response.json( {
        msg : "Welocome to Express Server"
    });
});


app.listen(port, hostname, () => {
    console.log(`Express Server is Started at http://${hostname}:${port}`);
});