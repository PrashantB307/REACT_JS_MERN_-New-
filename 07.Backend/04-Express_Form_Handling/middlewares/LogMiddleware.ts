import {Request, Response, NextFunction} from "express";

const logMiddleware = (request : Request , response : Response, next : NextFunction) => {
    const url = request.originalUrl;
    const method  = request.method;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    console.log(`URL : ${url} Method : ${method} DATE : ${date} TIME : ${time}`);
    next();
};

export default logMiddleware;
