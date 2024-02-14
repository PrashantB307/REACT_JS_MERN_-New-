import express, {Application, Request, Response} from 'express';
import userRouter from "./router/userRouter"
import dotenv from "dotenv";
import logMiddleware from './middlewares/LogMiddleware';


const app:Application = express();

//  Configure express to read .env file
dotenv.config( {
    path : "./.env"
});


const hostname: string | undefined = process.env.EXPRESS_HOST_NAME;
const port: string | undefined = process.env.EXPRESS_PORT;


//  Configure express to read the form data
app.use(express.json());
app.use(logMiddleware);


app.get( "/", (request:Request , response:Response) => {
    response.status(200);
    response.json( {
        msg : "Welocome to Express Server"
    });
});


//   Router configuration
app.use('/api/users', userRouter)


if(port && hostname) {
    app.listen(Number(port), hostname, () => {
        console.log(`Express Server is Started at http://${hostname}:${port}`);
    });
}

