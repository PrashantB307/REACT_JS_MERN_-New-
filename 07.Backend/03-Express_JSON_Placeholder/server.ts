import express, {Application, Request, Response} from 'express';
import { request } from 'http';
import albumsRouter from './routers/albumsRouter';
import commentsRouter from './routers/commentsRouter';
import photosRouter from './routers/photosRouter';
import todosRouter from './routers/todosRouter';
import usersRouter from './routers/usersRouter';
import postsRouter from './routers/postsRouter';

const hostname:string = "127.0.0.1";
const port:number = 9000;

const app:Application = express();

app.get( "/", (request:Request , response:Response) => {
    response.status(200);
    response.json( {
        msg : "Welocome to Express Server"
    });
});


/**
 * Router Configiration =====>
 */

app.use("/albums", albumsRouter);
app.use("/comments", commentsRouter);
app.use("/photos", photosRouter);
app.use("/todos", todosRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.listen(port, hostname, () => {
    console.log(`Express Server is Started at http://${hostname}:${port}`);
});